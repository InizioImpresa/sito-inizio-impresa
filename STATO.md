# Sito Inizio Impresa: diario

## Dove siamo (24/11/2026)

Progetto appena partito. Il vecchio sito è stato copiato tutto: 38 pagine e
161 immagini su Drive in `originale/`, i testi pagina per pagina in
`contenuti-originali/`. C'è lo scheletro Astro. L'archivio GitHub (pubblico) e
GitHub Pages sono creati, ma **la pubblicazione automatica non è ancora accesa**:
il file `.github/workflows/pubblica.yml` è pronto sul disco ma non è nel repo,
perché la chiave di GitHub sul fisso di Caserta non ha il permesso "workflow".
**Nessuna pagina vera è ancora rifatta.** Il sito vero non è stato toccato.

## Decisioni prese

- Si rifà con **Astro**, sito statico (24/11/2026, Salvatore).
- Lavoro pensato per **riprendere da qualsiasi computer**: tutto sta su GitHub
  e questo diario dice da dove ripartire (24/11/2026, Salvatore).
- Come per Officina: **niente `npm install` su Drive**, costruisce GitHub.
- Indirizzo di prova su GitHub Pages; il dominio vero si sposta solo alla fine, con l'ok di Salvatore.
- I moduli contatto restano quelli esterni di oggi (drewcompany), reincollati uguali.
- Gli indirizzi delle pagine che restano non cambiano.

## Già fatto (da non rifare)

- Copia del vecchio sito: `originale/` (solo Drive) e `contenuti-originali/` (nel repo).
- Strumento per estrarre i testi: `strumenti/estrai-testi.py`.
- Mappa di tutte le pagine con cosa farne: `PIANO.md`.
- Scheletro: `astro.config.mjs`, `src/layouts/Base.astro`, home provvisoria,
  `.github/workflows/pubblica.yml`.

## Prossimo passo

1. Accendere la pubblicazione automatica: Salvatore lancia una volta
   `gh auth refresh -h github.com -s workflow` (si apre il browser, si
   conferma). Poi Claude aggiunge `.github/workflows/pubblica.yml` (se manca,
   il testo è nel commit 773789e), fa push e controlla che l'indirizzo di prova
   https://inizioimpresa.github.io/sito-inizio-impresa/ si apra.
2. Decidere la veste grafica: rifare quella di oggi più pulita, oppure partire
   da `aree/inizio-marketing/analisi/2026-11-21-veste-grafica-vera-di-inizio.md`
   (nella memoria sg-second-brain).
3. Rifare la home e una landing (ZES 2026) e farle vedere a Salvatore.
4. Poi le altre pagine della sezione A di `PIANO.md`.

## Domande aperte (per Salvatore)

- Le pagine lasciate a metà (sezione B di `PIANO.md`): si buttano o si rifanno?
- Quale banner dei cookie al posto di Complianz.
- Chi cambierà i testi dopo: Claude su richiesta, o serve un piccolo pannello?
