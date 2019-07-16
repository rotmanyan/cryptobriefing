import React from 'react'
import {CSVLink} from "react-csv"

export const OptionTableCoins = ({
                                   transaction,
                                   // columns,
                                   // exportButton
                                 }) =>
  <>
    <div className="available__option">
      {!transaction && <button className='buttonMedium' value=''>Reset Portfolio</button>}
      <button className='available__btn' onClick={() => window.print()} value=''>Print</button>
      <CSVLink
        className='available__btn'
        filename='transaction.csv'

        asyncOnClick={true}
        // onClick={(event, done) => columns()}

        data={[
          ["firstname", "lastname", "email"],
          ["Ahmed", "Tomi", "ah@smthing.co.com"],
          ["Raed", "Labes", "rl@smthing.co.com"],
          ["Yezzi", "Min l3b", "ymin@cocococo.com"]
        ]}>Download CSV</CSVLink>
    </div>
  </>