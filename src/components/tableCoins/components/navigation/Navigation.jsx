import React from 'react';
import {NavLink} from "react-router-dom";
import Search from "../search/Search";
import Columns from "../columns/Columns";
import {CurrencyTableCoins} from "../currencyTableCoins/CurrencyTableCoins";

const Navigation = ({
                      currency, navigation, search,
                      searchList, searchValue, setSearchValue,
                      directToCoinDetails, columns, isAuth,
                      watchSetting, openSettings
                    }) => {

  return (
    <>
      {currency && <CurrencyTableCoins/>}
      {search && <Search
        setSearchValue={setSearchValue}
        searchList={searchList}
        searchValue={searchValue}
        directToCoinDetails={directToCoinDetails}
      />}
      {navigation && <div className='icoSto__routing'>
        <div className='icoSto__routingBox'>
          {navigation.arr.map((el, id) =>
            <NavLink
              key={id}
              className='navigation__item navigation__item--inversion'
              activeClassName='navigation__item--inversionActive'
              to={navigation.firstName + navigation.secondName + el.split(' ').join('')}
            >
              {el}
            </NavLink>
          )}
        </div>
      </div>}
      {columns && <Columns
        watchSetting={watchSetting}
        openSettings={openSettings}
        isAuth={isAuth}
      />}
    </>
  );
};

export default Navigation;