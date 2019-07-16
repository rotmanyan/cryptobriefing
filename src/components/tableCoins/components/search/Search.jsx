import React from 'react';
import {Link} from "react-router-dom";
import glass from 'assets/icons/glass.svg'
import searchLight from 'assets/icons/ic-search-light.svg'

const Search = ({
                  searchList, searchValue, directToCoinDetails,
                  setSearchValue, isSearchOpen, dnd,
                  showSearch, setSearchChartId
                }) => {
  return (
    <>
      <div className='listed__search'>
        {isSearchOpen
          ? <img className='listed__label' src={searchLight} onClick={showSearch} alt='glass'/>
          : <img className='listed__label' src={glass} alt='glass'/>
        }
        <form className='wrapper-search'>
          <input
            type='text'
            id='search'
            placeholder='Search token'
            autoComplete='off'
            className='listed__input'
            onChange={setSearchValue}
            value={searchValue}
          />
          {isSearchOpen || searchValue.length > 2
            ? <div className="searchList__list">
              {searchList.length
                ? dnd
                  ? searchList.map((el, index) =>
                    <div
                      className="searchList__item"
                      key={index}
                      onClick={() => setSearchChartId(el.id)}
                    >
                      <span className='searchList__symbol'>{el.symbol}</span>
                      <span className='searchList__name'>{el.name}</span>
                    </div>
                  )
                  : searchList.map((el, index) =>
                    <Link
                      to='/projectProfile'
                      className="searchList__item"
                      key={index}
                      onClick={() => directToCoinDetails(el.id)}
                    >
                      <span className='searchList__symbol'>{el.symbol}</span>
                      <span className='searchList__name'>{el.name}</span>
                    </Link>
                  )
                : <p className="searchList__item searchList__item--block">No match search...</p>
              }
            </div>
            : null}
        </form>
      </div>
    </>
  );
};

export default Search;