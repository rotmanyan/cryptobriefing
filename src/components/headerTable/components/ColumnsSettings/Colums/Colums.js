import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  selectorStandart,
  selectorSupply,
  selectorShortTermRoi,
  selectorMiningData,
  selectorTokenSalesState,
  selectorShapeRatios,
  selectSetingsForApi
} from "data/columnSettings/selectors";
import { selectColumnsSettings } from "data/columnSettings/actions";
import {
  fetchDataColumnsSettings,
  applyColumsSettings
} from "middleware/ColumnsSettings";
import { clearSelectSettings } from "data/columnSettings/actions";

import ItemSetting from "../ItemSetting/ItemSetting";

class Columns extends Component {
  componentDidMount() {
    const { fetchDataColumnsSettings } = this.props;
    fetchDataColumnsSettings();
  }

  handleSubmit = e => {
    const {
      dataSelectSettings,
      applyColumsSettings,
      openSettings,
      clearSelectSettings
    } = this.props;
    applyColumsSettings(dataSelectSettings);
    openSettings(e);
    clearSelectSettings();
  };

  render() {
    const {
      dataStandart,
      dataSupply,
      dataShortTermRoi,
      dataMiningData,
      dataTokenSalesState,
      dataShapeRatios,
      selectColumnsSettings,
      search
    } = this.props;

    return (
      <Fragment>
        <section className="columnSettings__body columnSettings__body--main">
          <div className="columnSettings__itemsRow">
            <div className="columnSettings__itemRow">
              <p className="columnSettings__titleRow">Standard</p>

              <ItemSetting
                search={search}
                data={dataStandart}
                selectColumnsSettings={selectColumnsSettings}
              />
            </div>

            <div className="columnSettings__itemRow">
              <p className="columnSettings__titleRow">Supply</p>

              <ItemSetting
                search={search}
                data={dataSupply}
                selectColumnsSettings={selectColumnsSettings}
              />
            </div>

            <div className="columnSettings__itemRow">
              <p className="columnSettings__titleRow">Short-term ROI</p>

              <ItemSetting
                search={search}
                data={dataShortTermRoi}
                selectColumnsSettings={selectColumnsSettings}
              />
            </div>

            <div className="columnSettings__itemRow">
              <p className="columnSettings__titleRow">Mining data</p>

              <ItemSetting
                search={search}
                data={dataMiningData}
                selectColumnsSettings={selectColumnsSettings}
              />
            </div>

            <div className="columnSettings__itemRow">
              <p className="columnSettings__titleRow">Token sale state</p>

              <ItemSetting
                search={search}
                data={dataTokenSalesState}
                selectColumnsSettings={selectColumnsSettings}
              />
            </div>

            <div className="columnSettings__itemRow">
              <p className="columnSettings__titleRow">Sharpe Ratios</p>

              <ItemSetting
                search={search}
                data={dataShapeRatios}
                selectColumnsSettings={selectColumnsSettings}
              />
            </div>
          </div>
        </section>
        <section className="columnSettings__footer">
          <div className="columnSettings__searchItemFooter">
            <button
              className="columnSettings__save primary-button"
              onClick={this.handleSubmit}
            >
              Apply setting
            </button>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dataSelectSettings: selectSetingsForApi(state),
  dataStandart: selectorStandart(state),
  dataSupply: selectorSupply(state),
  dataShortTermRoi: selectorShortTermRoi(state),
  dataMiningData: selectorMiningData(state),
  dataTokenSalesState: selectorTokenSalesState(state),
  dataShapeRatios: selectorShapeRatios(state)
});

const mapDispatchToProps = {
  fetchDataColumnsSettings,
  selectColumnsSettings,
  applyColumsSettings,
  clearSelectSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Columns);
