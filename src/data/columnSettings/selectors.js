export const datacolumnSettings = state => state.columnSettings.data || [];
export const selectSetings = state => state.columnSettings.selectSettings;
export const selectSetingsForApi = state =>
  state.columnSettings.selectSettings.map(item => item.column_type);

export const selectorStandart = state => {
  if (state.columnSettings.data.length) {
    return state.columnSettings.data.filter(item => item.block === "Standard")[0]
      .items;
  } else {
    return [];
  }
};

export const selectorSupply = state => {
  if (state.columnSettings.data.length) {
    return state.columnSettings.data.filter(item => item.block === "Supply")[0]
      .items;
  } else {
    return [];
  }
};

export const selectorShortTermRoi = state => {
  if (state.columnSettings.data.length) {
    return state.columnSettings.data.filter(
      item => item.block === "Short Term ROI"
    )[0].items;
  } else {
    return [];
  }
};

export const selectorMiningData = state => {
  if (state.columnSettings.data.length) {
    return state.columnSettings.data.filter(
      item => item.block === "Mining Data"
    )[0].items;
  } else {
    return [];
  }
};

export const selectorTokenSalesState = state => {
  if (state.columnSettings.data.length) {
    return state.columnSettings.data.filter(
      item => item.block === "Token Sale State"
    )[0].items;
  } else {
    return [];
  }
};

export const selectorShapeRatios = state => {
  if (state.columnSettings.data.length) {
    return state.columnSettings.data.filter(
      item => item.block === "Shape Ratios"
    )[0].items;
  } else {
    return [];
  }
};

export const columnsShapeRatios = state => state.columnSettings.data