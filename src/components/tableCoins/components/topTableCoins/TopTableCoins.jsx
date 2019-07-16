import React from 'react'

export const TopTableCoins = ({statistics}) =>
  <>
    <div className="available__top">
      <div className="available__cash">
        <p className=''>Available Cash</p>
        <h3 className=''>${statistics.available_cash}</h3>
      </div>
      <div className="available__total">
        <p className=''>Total Portfolio Value</p>
        <h3 className=''>${statistics.total_portfolio_value}</h3>
      </div>
      <div className="available__roi">
        <p className=''>ROI</p>
        <h3 className=''>{statistics.roi}%</h3>
      </div>
    </div>
  </>