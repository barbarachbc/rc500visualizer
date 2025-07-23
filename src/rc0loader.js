export const Rc0Loader = {
  template: `
    <div v-if="expanded" class="file-drop-zone" @dragover.prevent @drop.prevent="onDrop">
      <input type="file" accept=".RC0,.xml" class="form-control mb-2" @change="onFileChange">
      <div>Drop or select your RC-500 .RC0 file</div>
      <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
    </div>
    <div v-else class="text-center mb-3">
      <a href="#" class="btn btn-link text-primary text-decoration-underline" style="font-size:1.1em;" @click.prevent="expanded = true">&#8635; Load new file</a>
    </div>
  `,
  data() {
    return {
      expanded: true,
      error: null
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) this.readFile(file);
    },
    onDrop(e) {
      const file = e.dataTransfer.files[0];
      if (file) this.readFile(file);
    },
    readFile(file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          let text = evt.target.result;
          // Truncate at last closing tag (</database> or </mem>)
          const lastDb = text.lastIndexOf('</database>');
          const lastMem = text.lastIndexOf('</mem>');
          let endIdx = -1;
          if (lastDb !== -1) {
            endIdx = lastDb + 11;
          } else if (lastMem !== -1) {
            endIdx = lastMem + 6;
          }
          if (endIdx !== -1) {
            text = text.slice(0, endIdx);
          }
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, 'application/xml');
          const root = xml.documentElement;
          if (root.nodeName === 'parsererror') throw new Error('Invalid XML');
          // Parse per-memory blocks
          const mems = Array.from(root.getElementsByTagName('mem'));
          const memories = mems.map(mem => {
            const result = {};
            for (const section of mem.children) {
              for (const param of section.children) {
                result[section.nodeName + '.' + param.nodeName] = param.textContent;
              }
            }
            return result;
          });
          const memoryIds = mems.map(mem => mem.getAttribute('id'));
          this.$emit('parsed', { memories, memoryIds, rootTag: root.nodeName });
          this.expanded = false;
        } catch (err) {
          this.error = 'Failed to parse XML: ' + err.message;
          this.$emit('parsed', { error: this.error });
        }
      };
      reader.onerror = () => {
        this.error = 'File reading error.';
        this.$emit('parsed', { error: this.error });
      };
      reader.readAsText(file);
    }
  }
};