// Dati comuni del sito, presi dal vecchio sito WordPress (24/11/2026).
// Si cambiano qui e valgono per tutte le pagine.
import elca from '../assets/clienti/elca.png';
import dalessio from '../assets/clienti/dalessio.png';
import ariello from '../assets/clienti/ariello.png';
import shoelab from '../assets/clienti/shoelab.png';
import meatin from '../assets/clienti/meatin.png';
import devivo from '../assets/clienti/de-vivo.png';
import edilsistem from '../assets/clienti/edil-sistem.png';

export const contatti = {
  email: 'info@inizioimpresa.it',
  telefono: '348 236 0349',
  telefonoLink: 'tel:+393482360349',
  indirizzo: 'Piazza Roma 7, Piedimonte Matese (CE)',
  mappa:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8405804671506!2d14.370669476438502!3d41.355818697952046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a60ceaa3adcbb%3A0x431eb7fe5001542c!2sP.za%20Roma%2C%207%2C%2081016%20Piedimonte%20Matese%20CE!5e0!3m2!1sit!2sit!4v1748952783952!5m2!1sit!2sit',
  societa: 'SAGESS S.R.L.',
  sede: 'Strada Provinciale 66-01 SNC, 81011 Alife (CE)',
  piva: 'IT04614550616',
};

export const numeri = [
  { valore: '300+', etichetta: 'Progetti approvati' },
  { valore: '180+', etichetta: 'Imprese affidate a noi' },
  { valore: '19+', etichetta: 'Milioni finanziati' },
  { valore: '92%', etichetta: 'Tasso di approvazione' },
];

// "breve" è la voce nella barra in alto (deve stare su una riga), "testo" quella nel piede.
export const menu = [
  { breve: 'ZES 2026', testo: 'ZES Unica 2026', href: 'zes-unica-2026/' },
  { breve: 'Microcredito', testo: 'Microcredito', href: 'microcredito-imprenditoriale/' },
  { breve: 'Camera di Commercio', testo: 'Bando Camera di Commercio', href: 'bando-camera-di-commercio/' },
  { breve: 'Commercialisti', testo: 'Sei un commercialista?', href: 'sei-un-commercialista/' },
  { breve: 'Inizio PRO', testo: 'Inizio Impresa PRO', href: 'inizio-impresa-pro/' },
  { breve: 'Blog', testo: 'Blog', href: 'blog-news/' },
];

// Le storie dei clienti, con la misura ottenuta (come sul vecchio sito).
export const storie = [
  { nome: 'Elca Abrasivi', misura: 'Bando Regione Campania 2022', foto: elca },
  { nome: "D'Alessio Vetri", misura: 'ZES 2024', foto: dalessio },
  { nome: 'Tipografia Ariello', misura: 'Bando ISI INAIL 2023', foto: ariello },
  { nome: 'ShoeLab', misura: 'Resto al Sud', foto: shoelab },
  { nome: 'Meatin', misura: 'Bando Regione Campania 2022', foto: meatin },
  { nome: 'De Vivo', misura: 'Bando Regione Campania 2022', foto: devivo },
  { nome: 'Edil System', misura: 'Bando ISI INAIL 2023', foto: edilsistem },
];

export const perche = [
  {
    titolo: '92% di successo nelle pratiche avviate',
    testo:
      'Con una percentuale di successo tra le più alte in Italia, aiutiamo le imprese ad accedere a fondi, contributi e altri strumenti per crescere concretamente senza appesantire la liquidità.',
  },
  {
    titolo: 'Competenza e approccio multidisciplinare',
    testo:
      'Non solo finanza agevolata: siamo esperti anche in credito ordinario, leasing e noleggio operativo. Questo ci permette di offrirti la soluzione più completa e vantaggiosa per tutte le tue esigenze.',
  },
  {
    titolo: 'Una solida rete di partner e istituti di credito',
    testo:
      'Collaboriamo con oltre 40 istituti bancari e intermediari finanziari per garantirti sempre le migliori condizioni sul mercato e tempi rapidi, con formule flessibili e vantaggiose.',
  },
  {
    titolo: 'Un consulente dedicato sempre al tuo fianco',
    testo:
      'Un consulente dedicato ti aggiorna in ogni fase. Sappiamo quanto sia importante avere un punto di riferimento chiaro, competente e sempre disponibile per la tua serenità aziendale.',
  },
];
