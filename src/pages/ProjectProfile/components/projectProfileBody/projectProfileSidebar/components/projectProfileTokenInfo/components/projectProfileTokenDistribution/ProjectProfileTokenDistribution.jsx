import React from 'react';

const ProjectProfileTokenDistribution = () => {
  return (
      <div className='tokenTable--distribution'>
          <h3 className="tokenTable__title">Token Distribution</h3>
          <div className="tokenTable__statistic">
              <div className="tokenTable__statistic-item tokenTable__statistic-item--public" title='Public'>Public</div>
              <div className="tokenTable__statistic-item tokenTable__statistic-item--ico" title='ICO Bounty Program'>ICO Bounty Program</div>
              <div className="tokenTable__statistic-item tokenTable__statistic-item--research" title='Research & Development'>Research & Development</div>
              <div className="tokenTable__statistic-item tokenTable__statistic-item--founders" title='Founders Tokens'></div>
          </div>
          <div className="tokenTable tokenTable--statistic">
              <div className="tokenTable__item">
                  <div className="tokenTable__left tokenTable__left--public">Public</div>
                  <div className="tokenTable__right">82%</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left tokenTable__left--ico">ICO Bounty Program</div>
                  <div className="tokenTable__right">10%</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left tokenTable__left--research">Research & Development</div>
                  <div className="tokenTable__right">6%</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left tokenTable__left--founders">Founders Tokens</div>
                  <div className="tokenTable__right">2%</div>
              </div>
          </div>
      </div>
  );
};

export default ProjectProfileTokenDistribution;