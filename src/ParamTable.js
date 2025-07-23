// ParamTable.js
// Vue 3 component for displaying RC-500 parameter tables
import { NotesTooltip } from './NotesTooltip.js';

export const ParamTable = {
  name: 'ParamTable',
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  components: {
    NotesTooltip
  },
  template: `
    <div class="table-responsive">
      <table class="table table-hover table-borderless align-middle mb-0 bg-white shadow-sm rounded">
        <thead>
          <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.section + '-' + row.param">
            <td>
              <span :title="row.display" class="fw-bold text-dark" style="letter-spacing:0.03em;">{{ row.ui || row.param }}</span>
            </td>
            <td>
              <notes-tooltip :notes="row.notes">
                <span class="d-inline-flex align-items-center">
                  <span class="rc500-badge-value badge rounded-pill px-3 py-2 fw-semibold" :class="row.valueDescBadge + (row.valueDescBadge === 'badge-secondary' ? ' text-dark' : '')">
                    <span v-if="row.valueDescIcon">
                      <i v-for="(iconClass, idx) in row.valueDescIcon.split(' ')" :key="idx" class="me-1 bi" :class="iconClass" style="font-size:1.1em;"></i>
                    </span>
                    {{ row.valueDesc }}
                   </span>
                </span>
              </notes-tooltip>
            </td>
            <td class="text-muted small" style="max-width:24em; white-space:pre-line;">
              {{ row.description || '' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
};

// For CDN/global Vue usage
//window.ParamTable = ParamTable;
