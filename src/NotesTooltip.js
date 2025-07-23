// NotesTooltip: Vue 3 component for displaying a truncated notes list and a tooltip popup with all options
// Usage: <notes-tooltip :notes="row.notes"></notes-tooltip>

export const NotesTooltip = {
  name: 'NotesTooltip',
  props: {
    notes: { type: String, required: true }
  },
  data() {
    return {
      tooltipVisible: false,
      hoverVisible: false
    };
  },
  computed: {
    optionsArr() {
      return this.notes.split(',').map(s => s.trim());
    },
    isTruncated() {
      return this.optionsArr.length > 3;
    },
    preview() {
      return this.optionsArr.slice(0, 3).join(', ');
    },
    fullList() {
      return this.optionsArr.join(', ');
    }
  },
  methods: {
    showHover() { this.hoverVisible = true; },
    hideHover() { this.hoverVisible = false; },
    toggleExpand() { this.tooltipVisible = this.isTruncated && !this.tooltipVisible; }
  },
  template: `
    <span
      @mouseenter="showHover"
      @mouseleave="hideHover"
      @click.stop.prevent="toggleExpand"
      style="cursor:pointer;position:relative;">
      <slot />
      <div v-if="hoverVisible && !tooltipVisible" class="notes-tooltip-popup">
        {{ preview }}<span v-if="isTruncated">, ...</span>
      </div>
      <div v-if="hoverVisible && tooltipVisible" class="notes-tooltip-popup">
        <b>All options:</b><br/>
        <span>{{ fullList }}</span>
      </div>
    </span>
  `
};
