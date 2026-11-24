# Sito Inizio Impresa: diario

## Dove siamo (24/11/2026)

**Fatte e online sull'indirizzo di prova la home e la landing ZES 2026**, con la
veste nuova: colori del logo di Inizio, stile pulito di Supernova, obiettivo
"far fidare" (dettagli in `DECISIONI.md`, D1-D5). Controllate su PC e telefono.
I moduli contatto funzionano (sono quelli esterni di oggi). Le altre pagine non
ci sono ancora: i loro link portano a una pagina vuota. Il sito vero non è toccato.

## Decisioni prese

- Si rifà con **Astro**, sito statico. Si deve poter riprendere da qualsiasi computer.
- Niente `npm install` su Drive: costruisce e pubblica GitHub a ogni push.
- Indirizzo di prova su GitHub Pages; il dominio vero si sposta solo alla fine, con l'ok di Salvatore.
- Moduli contatto esterni (drewcompany) reincollati uguali. Indirizzi delle pagine invariati.
- **Veste:** colori di Inizio + impaginazione moderna e pulita come Supernova (Salvatore, 24/11).
  Rosso `#D5414A`, blu notte `#2C2E42`, titoli Poppins, testo Figtree.

## Già fatto (da non rifare)

- Copia del vecchio sito: `originale/` (solo Drive) e `contenuti-originali/` (nel repo).
- Mappa delle pagine: `PIANO.md`. Scelte prese da solo: `DECISIONI.md`.
- Pezzi comuni pronti, da riusare per le altre pagine: `src/components/`
  (Testata, Piede, Modulo, Numeri, Storie, Perche) e i dati in `src/data/sito.ts`.
- Pagine fatte: `/` e `/zes-unica-2026/`.

## Prossimo passo

1. Salvatore guarda home e ZES sull'indirizzo di prova e dice cosa cambiare.
2. Con la veste approvata, rifare le altre pagine della sezione A di `PIANO.md`
   (microcredito, Camera di Commercio, commercialisti, PRO, ISI INAIL, Resto al Sud 2.0,
   marketing, wedding, venditori, blog, pagine legali, thank-you).
3. Poi: banner dei cookie, rimandi dai vecchi indirizzi, passaggio del dominio.

Su un computer nuovo: se `git push` rifiuta i file in `.github/workflows/`,
la chiave di GitHub non ha il permesso "workflow". Si risolve con
`gh auth refresh -h github.com -s workflow` lanciato da Claude (non dal
terminale in basso, che non è collegato): Salvatore conferma il codice su
https://github.com/login/device.

## Domande aperte (per Salvatore)

- ZES 2026: la prenotazione si chiudeva il 30/5/2026. Come presentiamo la pagina adesso?
- Le pagine lasciate a metà (sezione B di `PIANO.md`): si buttano o si rifanno?
- Quale banner dei cookie al posto di Complianz.
- Chi cambierà i testi dopo: Claude su richiesta, o serve un piccolo pannello?
