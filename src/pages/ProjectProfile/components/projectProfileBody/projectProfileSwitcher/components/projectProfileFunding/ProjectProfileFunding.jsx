import React from 'react'
import './projectProfileFunding.scss'


const ProjectProfileFunding = () =>
  <>


    <div className="listBoard__wrapper">
      <ul className='headerBoard__list headerBoard__list--tab'>
        <li className='boardBody__title'/>
        <li className='boardBody__title'>Public Sale</li>
        <li className='boardBody__title'>ICO</li>
      </ul>

      <div className="boardBody__wrapper">

        <ul className='funding__list'>
          <li className='boardBody__item'>Vesting Period</li>
          <li className='boardBody__item'>43% DIscount</li>
          <li className='boardBody__item'>23,877,890</li>
        </ul>

        <ul className='funding__list'>
          <li className='boardBody__item'>Vesting Period</li>
          <li className='boardBody__item'>43% DIscount</li>
          <li className='boardBody__item'>23,877,890</li>
        </ul>

        <ul className='funding__list'>
          <li className='boardBody__item'>Address</li>
          <li className='boardBody__item'>
            <a href="/123" target="_blank" rel="noopener noreferrer">Copy</a>
            <span className="boardBody__divider">/</span>
            <a href="/123" target="_blank" rel="noopener noreferrer">QR</a>
          </li>
          <li className='boardBody__item'>
            <a href="/123" target="_blank" rel="noopener noreferrer">Copy</a>
          </li>
        </ul>
      </div>
    </div>

  </>

export default ProjectProfileFunding