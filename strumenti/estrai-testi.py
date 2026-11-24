"""Estrae i testi delle pagine del vecchio sito WordPress in file Markdown.

Uso (dalla radice del progetto):
    python -I strumenti/estrai-testi.py originale/html contenuti-originali

Legge solo il contenuto della pagina (il blocco Elementor della pagina),
non il menu ne' il piede, che sono uguali ovunque e si estraggono a parte
dalla home con --anche-menu.
"""
import html
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

BLOCCHI = {"h1": "# ", "h2": "## ", "h3": "### ", "h4": "#### ", "h5": "##### ", "h6": "###### "}
SALTA = {"script", "style", "noscript", "svg", "template"}


class Estrattore(HTMLParser):
    def __init__(self, tutto=False):
        super().__init__(convert_charrefs=True)
        self.tutto = tutto
        self.profondita_pagina = 0  # >0 quando siamo dentro il contenuto della pagina
        self.pila = []
        self.salta = 0
        self.righe = []
        self.buffer = []
        self.prefisso = ""
        self.link = None

    def _dentro(self):
        return self.tutto or self.profondita_pagina > 0

    def _svuota(self):
        testo = re.sub(r"\s+", " ", "".join(self.buffer)).strip()
        if testo:
            self.righe.append(self.prefisso + testo)
        self.buffer = []
        self.prefisso = ""

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "div" and self.profondita_pagina == 0 and a.get("data-elementor-type") in ("wp-page", "wp-post", "single-page", "single-post"):
            self.profondita_pagina = 1
            self.pila.append("PAGINA")
            return
        if self.profondita_pagina > 0 and tag == "div":
            self.profondita_pagina += 1
        if tag in SALTA:
            self.salta += 1
        if self.salta or not self._dentro():
            return
        if tag in BLOCCHI:
            self._svuota()
            self.prefisso = BLOCCHI[tag]
        elif tag in ("p", "li", "div", "section", "br", "tr"):
            self._svuota()
            if tag == "li":
                self.prefisso = "- "
        elif tag == "a" and a.get("href"):
            self.link = a["href"]
            self.buffer.append("[")
        elif tag == "img":
            src = a.get("data-src") or a.get("src") or ""
            if "data:image" in src:
                src = a.get("data-lazy-src", "")
            if src:
                self._svuota()
                self.righe.append(f"![{a.get('alt', '')}]({src})")
        elif tag in ("input", "textarea", "select"):
            nome = a.get("placeholder") or a.get("name") or tag
            if a.get("type") not in ("hidden", "submit"):
                self._svuota()
                self.righe.append(f"[campo modulo: {nome} ({a.get('type', tag)})]")

    def handle_endtag(self, tag):
        if tag in SALTA and self.salta:
            self.salta -= 1
            return
        if self.salta:
            return
        if self.profondita_pagina > 0 and tag == "div":
            self.profondita_pagina -= 1
            if self.profondita_pagina == 0:
                self._svuota()
                return
        if not self._dentro():
            return
        if tag == "a" and self.link is not None:
            self.buffer.append(f"]({self.link})")
            self.link = None
        if tag in BLOCCHI or tag in ("p", "li"):
            self._svuota()

    def handle_data(self, data):
        if self.salta or not self._dentro():
            return
        self.buffer.append(data)


def pulisci(righe):
    fuori, prima = [], None
    for r in righe:
        r = r.replace("[]", "").strip()
        r = re.sub(r"\[\s*\]\([^)]*\)", "", r).strip()
        if not r or r == prima:
            continue
        fuori.append(r)
        prima = r
    return fuori


def titolo(testo):
    m = re.search(r"<title>(.*?)</title>", testo, re.S)
    return html.unescape(m.group(1)).strip() if m else ""


def descrizione(testo):
    m = re.search(r'<meta name="description" content="([^"]*)"', testo)
    return html.unescape(m.group(1)).strip() if m else ""


def main():
    sorgente, destinazione = Path(sys.argv[1]), Path(sys.argv[2])
    destinazione.mkdir(parents=True, exist_ok=True)
    for f in sorted(sorgente.glob("*.html")):
        testo = f.read_text(encoding="utf-8", errors="replace")
        e = Estrattore()
        e.feed(testo)
        e._svuota()
        righe = pulisci(e.righe)
        if not righe:  # pagina non fatta con Elementor: prendo tutto
            e = Estrattore(tutto=True)
            e.feed(testo)
            e._svuota()
            righe = pulisci(e.righe)
        testa = [
            "---",
            f"indirizzo_vecchio: https://inizioimpresa.it/{'' if f.stem == 'home' else f.stem + '/'}",
            f"titolo: {titolo(testo)!r}",
            f"descrizione: {descrizione(testo)!r}",
            "---",
            "",
        ]
        (destinazione / f"{f.stem}.md").write_text("\n".join(testa + righe) + "\n", encoding="utf-8")
        print(f"{f.stem}: {len(righe)} righe")


if __name__ == "__main__":
    main()
