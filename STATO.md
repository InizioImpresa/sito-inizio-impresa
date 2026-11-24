# Sito Inizio Impresa: diario

## Dove siamo (24/11/2026)

**Tutte le pagine vere del sito sono rifatte e online sull'indirizzo di prova** (21 pagine:
home, 6 landing dei bandi, commercialisti, venditori, PRO, marketing, wedding, blog,
privacy, cookie, 7 ringraziamenti), con la veste approvata da Salvatore. Controllate:
tutte si aprono, nessun link del menu rotto, niente esce dallo schermo su telefono.
Il sito vero (WordPress) non è toccato. Mancano: risposte di Salvatore sui contenuti
(sotto), banner dei cookie, rimandi dai vecchi indirizzi, passaggio del dominio.

## Decisioni prese

- Si rifà con **Astro**, sito statico. Si deve poter riprendere da qualsiasi computer.
- Niente `npm install` su Drive: costruisce e pubblica GitHub a ogni push.
- Indirizzo di prova su GitHub Pages; il dominio vero si sposta solo alla fine, con l'ok di Salvatore.
- Moduli contatto esterni (drewcompany) reincollati uguali. Indirizzi delle pagine invariati.
- **Veste:** colori di Inizio + stile moderno e pulito come Supernova (approvata 24/11).
- Scelte prese da solo durante il lavoro: `DECISIONI.md` (D1-D8).

## Già fatto (da non rifare)

- Tutte le pagine della sezione A di `PIANO.md` (spuntate).
- Pezzi comuni: `src/components/` (Testata, Piede, Modulo, Numeri, Storie, Perche,
  TestoLungo, Grazie) e dati in `src/data/sito.ts`.
- Copia del vecchio sito: `originale/` (solo Drive) e `contenuti-originali/` (nel repo).

## Prossimo passo

1. Salvatore risponde alle domande qui sotto; si correggono i testi.
2. Banner dei cookie gratuito al posto di Complianz, poi cookie policy aggiornata.
3. Rimandi dai vecchi indirizzi (sezioni B e C di `PIANO.md`) e scelta di dove
   ospitare il sito vero (GitHub Pages col dominio, o il server Plesk di oggi).
4. Passaggio di inizioimpresa.it al sito nuovo, solo con l'ok di Salvatore.

Su un computer nuovo: se `git push` rifiuta i file in `.github/workflows/`, lanciare
(da Claude, non dal terminale in basso) `gh auth refresh -h github.com -s workflow`
e Salvatore conferma il codice su https://github.com/login/device.

## Domande aperte (per Salvatore)

- **ZES 2026**: la prenotazione si chiudeva il 30/5/2026. Come presentiamo la pagina adesso?
- **Camera di Commercio**: il bando era "2025". È chiuso? C'è un'edizione 2026?
- **Inizio Impresa PRO**: l'edizione 2026 è ancora aperta? Limite 30 aziende ancora valido?
- **ISI INAIL 2026**: date, requisiti e spese ufficiali da aggiungere? 65% fino a 130.000 € vale?
- **Microcredito**: il massimo è 50.000 € o 75.000/100.000 € per le SRL? (scelto 75/100, D8)
- **Prezzi** (500 € → 0 €, success fee 2.500 €; 2.000 → 1.000 € + 10%; marketing 800-1.500 €/mese): ancora giusti?
- **Moduli**: ISI usa il modulo della ZES, venditori quello generico: servono moduli dedicati?
- **Commercialisti**: la testimonianza "Caruson & Partner" aveva il logo "Studio Rose": quale è giusta? Si possono pubblicare?
- **Wedding Marketing**: resta uguale a Marketing o si fa una pagina dedicata ai matrimoni?
- **Privacy**: è ancora sul vecchio D.Lgs. 196/2003, non sul GDPR: chi la aggiorna?
- Pagine lasciate a metà (sezione B di `PIANO.md`): si buttano (proposta) o si rifanno?
- Chi cambierà i testi dopo: Claude su richiesta, o serve un piccolo pannello?
