import React from 'react';
import placeholder from 'assets/icons/TRN.svg'

const ProjectProfileTeam = () =>
  <>

    <div className="listBoard__wrapper">
      <ul className='headerBoard__list headerBoard__list--tab'>
        <li className='boardBody__title'>NAME</li>
        <li className='boardBody__title'>POSITION</li>
        <li className='boardBody__title'>SOCIAL</li>
      </ul>

      <div className="boardBody__wrapper">

        <ul className='funding__list'>
          <li className='boardBody__item'>
            <img src={placeholder} className='funding__img' alt={placeholder}/>
            <span>Francesco Nazari Fusetti</span>
          </li>
          <li className='boardBody__item'>CEO & Co-Founder</li>
          <li className='boardBody__item'>
            <a href="/123">Link</a>
          </li>
        </ul>
      </div>
    </div>

    <h2 className='funding__advisors'>Advisors</h2>
    <div className="listBoard__wrapper">
      <ul className='headerBoard__list'>
        <li className='boardBody__title'>NAME</li>
        <li className='boardBody__title'>SOCIAL</li>
      </ul>
      <div className="boardBody__wrapper">
        <ul className='funding__list'>
          <li className='boardBody__item'>
            <img src={placeholder} className='funding__img' alt={placeholder}/>
            <span>Francesco Nazari Fusetti</span>
          </li>
          <li className='boardBody__item'>
            <a href="/123">Link</a>
          </li>
        </ul>
        <ul className='funding__list'>
          <li className='boardBody__item'>
            <img src={placeholder} className='funding__img' alt={placeholder}/>
            <span>Francesco Nazari Fusetti</span>
          </li>
          <li className='boardBody__item'>
            <a href="/123">Link</a>
          </li>
        </ul>
        <ul className='funding__list'>
          <li className='boardBody__item'>
            <img src={placeholder} className='funding__img' alt={placeholder}/>
            <span>Francesco Nazari Fusetti</span>
          </li>
          <li className='boardBody__item'>
            <a href="/123">Link</a>
          </li>
        </ul>
      </div>
    </div>

  </>

export default ProjectProfileTeam;