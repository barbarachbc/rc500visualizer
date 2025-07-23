// CollapsibleCard: Vue 3 global component for Bootstrap card with chevron
// Usage: <collapsible-card :title="..." :initiallyOpen="true|false"><template #default>...</template></collapsible-card>

export const CollapsibleCard = {
  name: 'CollapsibleCard',
  props: {
    title: String,
    initiallyOpen: { type: Boolean, default: false }
  },
  data() {
    return { open: this.initiallyOpen };
  },
  methods: {
    toggle() { this.open = !this.open; }
  },
  template: `
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between" :class="{ 'closed': !open }" @click="toggle" style="cursor:pointer;">
        <span><b>{{ title }}</b></span>
        <span><i :class="open ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i></span>
      </div>
      <div v-show="open" class="card-body">
        <slot></slot>
      </div>
    </div>
  `
};