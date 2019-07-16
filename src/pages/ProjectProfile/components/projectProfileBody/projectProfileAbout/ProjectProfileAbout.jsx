import React from 'react';
// im
import docIcon from "../../../../../assets/icons/ic-doc.svg";
import pdfIcon from "../../../../../assets/icons/ic-pdf.svg";
import webIcon from "../../../../../assets/icons/ic-web.svg";

import './projectProfileAbout.scss'

export const ProjectProfileAbout = ({props, props: {coin}}) => {
  return (
    <>
      <div className='projectAbout'>
        <h2 className='projectAbout__title'>About {coin.name}</h2>
        <div className='projectAbout__header'>
          <a href="/" className='projectAbout__aidcoin'>
            <img src={webIcon} alt={coin.name}/>
            {coin.name}.com
          </a>
          <a href="/" className='projectAbout__whitepaper'>
            <img src={pdfIcon} alt={coin.name}/>
            Whitepaper
          </a>
          <a href="/" className='projectAbout__documentation'>
            <img src={docIcon} alt={coin.name}/>
            Technical Documentation
          </a>
        </div>
        <p>
          AidCoin - token that aims to become the preferred method to donate transparently through blockchain technology
          and to access the network of {coin.name}Pay services. {coin.name}Chain is a platform that tracks {coin.name}Coin
          donation flows.
        </p>
        <p>
          The {coin.name} project is conceived and developed by CharityStars, an established VC-backed charity
          fundraising
          platform.
        </p>
        <p>
          {coin.name}Chain will become available to the public in 2018.
        </p>
      </div>
    </>
  )
}