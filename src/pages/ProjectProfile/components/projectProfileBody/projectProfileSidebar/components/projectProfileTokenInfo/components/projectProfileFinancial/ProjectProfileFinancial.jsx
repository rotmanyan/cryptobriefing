import React from 'react';
import ProjectProfileTokenTable from "../projectProfileTokenTable/ProjectProfileTokenTable";

const ProjectProfileFinancial = () => {
  return (
          <ProjectProfileTokenTable title='Financial'>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Ticker</div>
                  <div className="tokenTable__right">AID</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Price</div>
                  <div className="tokenTable__right">1 Aid = 0.0312314134241 USD</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Team Wallet</div>
                  <div className="tokenTable__right">
                      $345.624 <span className="tokenTable__date">2018-29-01</span>
                  </div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Ticker</div>
                  <div className="tokenTable__right">
                      <a href="/" className="tokenTable__link">Copy</a>
                      <span className="tokenTable__slash">/</span>
                      <a href="/" className="tokenTable__link">QR</a>
                  </div>
              </div>
          </ProjectProfileTokenTable>
  );
};

export default ProjectProfileFinancial;