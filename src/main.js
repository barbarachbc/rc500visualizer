// Main entry for RC500 Visualizer bundle
import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { Rc0Loader } from './rc0loader.js';
import { CollapsibleCard } from './collapsiblecard.js';
import { NotesTooltip } from './NotesTooltip.js';
import { ParamTable } from './ParamTable.js';
import { Rc500Memories } from './RC500Memories.js';

createApp({
  components: { Rc0Loader, CollapsibleCard, NotesTooltip, ParamTable, Rc500Memories },  
}).mount('#app');
