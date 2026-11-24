// Configurazione del sito.
// Due modi di costruirlo:
// - PROVA (predefinito): va su https://inizioimpresa.github.io/sito-inizio-impresa/
//   senza pixel e senza Google, e chiede a Google di NON indicizzarlo.
// - VERO (variabile SITO_VERO=1): per inizioimpresa.it, con pixel e Tag Manager.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const vero = process.env.SITO_VERO === '1';

export default defineConfig({
  site: vero ? 'https://inizioimpresa.it' : 'https://inizioimpresa.github.io',
  base: vero ? '/' : '/sito-inizio-impresa',
  trailingSlash: 'always',
  // Le pagine di ringraziamento non vanno nella mappa per Google.
  integrations: vero ? [sitemap({ filter: (p) => !p.includes('/thank-you-') })] : [],
  build: { format: 'directory' },
});
