// RC500Memories.js
// Vue 3 component for displaying all memories and their sections

import { RC500_MAPPING } from './rc500_mapping.js';
import { RC500Util } from './rc500_value_utils.js';
import { CollapsibleCard } from './collapsiblecard.js';
import { ParamTable } from './ParamTable.js';
import { Rc0Loader } from './rc0loader.js';
import { NotesTooltip } from './NotesTooltip.js';

export const Rc500Memories = {
  name: 'Rc500Memories',
  components: {
    Rc0Loader, CollapsibleCard, NotesTooltip, ParamTable
  },
  data() {
    return {
      xmlError: '',
      xmlParsed: false,
      xmlRootTag: '',
      memories: [],
      memoryIds: [],
    };
  },
  methods: {
    onParsed({ memories, memoryIds, rootTag, error }) {
      if (error) {
        this.xmlError = error;
        this.xmlParsed = false;
        this.memories = [];
        this.memoryIds = [];
        this.openSections = {};
        return;
      }
      this.xmlError = '';
      this.xmlParsed = true;
      this.memories = memories;
      this.memoryIds = memoryIds;
      this.openMemories = memories.map((_, i) => i === 0); // open first by default
      this.openSections = {};
    },
    getMemoryName(mem) {
      let name = '';
      for (let i = 1; i <= 12; ++i) {
        const key = 'NAME.C' + (i < 10 ? '0' : '') + i;
        const code = mem[key];
        if (!code) break;
        name += String.fromCharCode(Number(code));
      }
      return name.trim();
    },
    getSections(mem) {
      // Show all RC-500 sections (except NAME, which is used for the card title)
      return [
        'TRACK1',
        'TRACK2',
        'PLAY',
        'REC',
        'LOOPFX',
        'RHYTHM',
        'CTL',
        'ASSIGN1', 'ASSIGN2', 'ASSIGN3', 'ASSIGN4', 'ASSIGN5', 'ASSIGN6', 'ASSIGN7', 'ASSIGN8'
      ];
    },
    getSectionRows(mem, section) {
      const mappingRows = this.getSectionMappingRows(section);
      if (!mappingRows || !mappingRows.length) return [];
      return mappingRows
        .map(row => {
          const value = mem?.[row.section + '.' + row.param] ?? '';
          const desc = RC500Util.describeValue(row, value);
          return { ...row, value, ...desc };
        })
        .filter(row => row.value !== '');
    },
    getSectionMappingRows(section) {
      if (section === 'PLAY' || section === 'REC') {
        return RC500_MAPPING.filter(row => row.section === 'MASTER' && row.uiSection === section);
      }
      return RC500_MAPPING.filter(row => row.section === section);
    }
  },
  template: `
    <div>
    <rc0-loader @parsed="onParsed"></rc0-loader>
    <div v-if="xmlError" class="alert alert-danger">{{ xmlError }}</div>
    <div v-if="xmlParsed && memories.length">
        <collapsible-card
        v-for="(mem, idx) in memories"
        :key="idx"
        :title="memoryIds[idx] + ': ' + getMemoryName(mem)"
        :initiallyOpen="idx === 0"
        class="mb-3"
        >
        <template #default>
            <collapsible-card
            v-for="section in getSections(mem)"
            :key="section"
            :title="section"
            :initiallyOpen="section === 'NAME'"
            class="mb-2"
            >
            <template #default>
                <param-table :rows="getSectionRows(mem, section)"></param-table>
            </template>
            </collapsible-card>
        </template>
        </collapsible-card>
    </div>
    </div>
  `
};
