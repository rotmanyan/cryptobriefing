import React from 'react'

export const HeadTableTableCoins = ({selected_fields, buySell}) => {
  return <>
    {selected_fields && <div className='headerBoard__list'>
      {selected_fields.map((el, index) =>
        <div className="headerBoard__item" key={index}>
          <span className="headerBoard__text">{el.column_name}</span>
        </div>)}
      {buySell && <div className='headerBoard__item'><span className='headerBoard__text'/></div>}
    </div>}
  </>
}