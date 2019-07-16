import React from 'react'

export const CurrencyTableCoins = () => {
  return (
    <>
      <div className="listed__bar">
        <div className="listed__dropDown">
          <div className="basicDropDown__wrapper">
            <select className="basicDropDown__input" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="RUS">RUS</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}