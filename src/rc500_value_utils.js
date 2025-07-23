// rc500_value_utils.js
// Pure value description logic for RC-500 param table

const UI_Description = {
  'onoff': {
    '0': ['OFF (0)', 'bi-x-circle-fill', 'badge-danger'],
    '1': ['ON (1)', 'bi-check-circle-fill', 'badge-success']
  },
  'immediatefade': {
    '0': ['IMMEDIATE (0)', 'bi-play-circle-fill', 'badge-info'],
    '1': ['FADE IN (1)', 'bi-sliders', 'badge-info']
  },
  'immediatefadeoutloopend': {
    '0': ['IMMEDIATE (0)', 'bi-stop-circle-fill', 'badge-info'],
    '1': ['FADE OUT (1)', 'bi-sliders', 'badge-info'],
    '2': ['LOOP END (2)', 'bi-skip-end-circle-fill', 'badge-info']
  },
  'automanual': {
    '0': ['Auto (0)', 'bi-gear-fill', 'badge-info'],
    '1': ['Manual (1)', 'bi-person-fill-gear', 'badge-info']
  },
  'emptyrecorded': {
    '0': ['Empty (0)', 'bi-x-circle-fill', 'badge-danger'],
    '1': ['Recorded (1)', 'bi-check-circle-fill', 'badge-success']
  },
  'recquantize': {
    '0': ['OFF (0)', 'bi-x-circle', 'badge-secondary'],
    '1': ['MEASURE (1)', 'bi-stopwatch', 'badge-info']
  },
  'trackchain': {
    '0': ['PARALLEL (0)', 'bi-arrows-expand', 'badge-primary'],
    '1': ['SERIES (1)', 'bi-link-45deg', 'badge-primary']
  },
  'singleplaychange': {
    '0': ['— (0)', '', 'badge-light'],
    '1': ['LOOP END (1)', 'bi-arrow-return-left', 'badge-light']
  },
  'allstart': {
    '0': ['ALL (0)', 'bi-collection-play', 'badge-light'],
    '1': ['TRACK1 (1)', 'bi-1-circle', 'badge-light'],
    '2': ['TRACK2 (2)', 'bi-2-circle', 'badge-light']
  },
  'trk1or2': {
    '0': ['TRK1 (0)', 'bi-1-circle', 'badge-light'],
    '1': ['TRK2 (1)', 'bi-2-circle', 'badge-light']
  },
  'dubmode': {
    '0': ['OVERDUB (0)', 'bi-clipboard-check', 'badge-light'],
    '1': ['REPLACE (1)', 'bi-clipboard-x', 'badge-light']
  },
  'fxType' :{
    '0': ['SCATTER1 (0)', 'bi-stars bi-1-circle', 'badge-light'],
    '1': ['SCATTER2 (1)', 'bi-stars bi-2-circle', 'badge-light'],
    '2': ['SCATTER3 (2)', 'bi-stars bi-3-circle', 'badge-light'],
    '3': ['SCATTER4 (3)', 'bi-stars bi-4-circle', 'badge-light'],
    '4': ['REPEAT1 (4)', 'bi-arrow-repeat bi-1-circle', 'badge-light'],
    '5': ['REPEAT2 (5)', 'bi-arrow-repeat bi-2-circle', 'badge-light'],
    '6': ['REPEAT3 (6)', 'bi-arrow-repeat bi-3-circle', 'badge-light'],
    '7': ['SHIFT1 (7)', 'bi-arrow-left-right bi-1-circle', 'badge-light'],
    '8': ['SHIFT2 (8)', 'bi-arrow-left-right bi-2-circle', 'badge-light'],
    '9': ['VINYL FLICK (9)', 'bi-disc', 'badge-light']
  }
};

export const RC500Util = {
  describeValue(row, value) {
  let valueDesc = value ?? '';
  let valueDescIcon = '';
  let valueDescBadge = 'badge-secondary';
  // Config-driven mapping
  if (row.valueMap && value !== undefined && value !== '') {
    valueDesc = row.valueMap[value] !== undefined ? `${row.valueMap[value]} (${value})` : value;
    valueDescBadge = 'badge-info';
  } else if (row.valueFormat === 'percent' && value !== '') {
    valueDesc = value + '% (' + value + ')';
    valueDescBadge = 'badge-secondary';
  }
  // Config-driven valueType logic (preferred)
  const valueType = row.valueType;
  const n = Number(value);
  if (valueType) {
    const descArr = UI_Description[valueType]?.[value];
    if (descArr) {
      valueDesc = descArr[0];
      valueDescIcon = descArr[1];
      valueDescBadge = descArr[2];
    }
  }
  return { valueDesc, valueDescIcon, valueDescBadge };
}
};