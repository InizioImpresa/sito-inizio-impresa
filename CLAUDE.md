# Sito Inizio Impresa: istruzioni per Claude

Rifacciamo il sito **inizioimpresa.it** (oggi WordPress + Elementor + tema Finpath)
con **Astro**: pagine già pronte, veloci, senza database e senza pannello.
Il sito vecchio resta acceso finché il nuovo non è approvato da Salvatore.

**Prima di fare qualsiasi cosa leggi `STATO.md`** (dove siamo, prossimo passo)
e `PIANO.md` (l'elenco delle pagine e cosa farne).

## Dove sta

| Cosa | Dove |
| --- | --- |
| Il progetto | `G:\Il mio Drive\6. CLAUDE\Sito Inizio Impresa` |
| Il codice | github.com/InizioImpresa/sito-inizio-impresa |
| Indirizzo di prova | https://inizioimpresa.github.io/sito-inizio-impresa/ |
| Sito vero (ancora WordPress) | https://inizioimpresa.it (server Plesk) |
| Copia completa del vecchio sito | `originale/html/` e `originale/immagini/` (solo su Drive, non nel repo) |
| Testi del vecchio sito, pagina per pagina | `contenuti-originali/*.md` (nel repo) |

Se `originale/` non c'è (computer senza Drive): gli indirizzi delle immagini
sono in `originale/elenco-immagini-originali.txt` e si riscaricano finché il
sito vecchio è acceso.

## Come si lavora (stessa tecnica di Officina)

- **Mai `npm install` nella cartella su Google Drive**: Drive non regge `node_modules`.
- Si scrive il codice, si fa `git push` su `main`: **GitHub costruisce il sito**
  (`.github/workflows/pubblica.yml`) e lo pubblica da solo sull'indirizzo di prova.
- Per vedere il risultato si apre l'indirizzo di prova, non un server locale.
- Ogni passaggio chiuso: aggiornare `STATO.md` (riscrivere *Dove siamo* e
  *Prossimo passo*, non appendere) e fare commit + push. Così da un altro
  computer si riparte esattamente da lì.

## Regole

- **Sull'indirizzo di prova niente pixel e niente Google**, e la pagina chiede di
  non essere indicizzata. Pixel Meta (732045139609308) e Tag Manager
  (GTM-NFZRRCSM) partono solo costruendo con `SITO_VERO=1`.
- **I moduli contatto restano quelli di oggi**: sono moduli esterni di
  `link.drewcompany.it` incorporati nella pagina (elenco in `PIANO.md`). Si
  reincollano uguali, così i contatti continuano ad arrivare dove arrivano oggi.
- Gli indirizzi delle pagine che restano **non cambiano** (es. `/zes-unica-2026/`),
  così Google e le inserzioni continuano a funzionare.
- Testi: si parte da quelli di `contenuti-originali/`. Le correzioni ai testi le
  decide Salvatore.
- Niente servizi a pagamento senza chiedere.
- Il passaggio del dominio inizioimpresa.it al sito nuovo si fa **solo** con
  l'ok esplicito di Salvatore.
