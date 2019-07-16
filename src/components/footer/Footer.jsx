import React from 'react'

const Footer = () => {
  return <>
    <div className="wrapper--default">
      <div className='container'>
        <footer className="footer">
          <a
            href='https://cryptobriefing.com/'
            rel="noopener noreferrer"
            target='_blank'
            className="footer__text footer__text--blue">
            Crypto Briefing
          </a>
          <p className="footer__text footer__text--gray">
            © 2019 Decentral Media, Inc. and Crypto Briefing - All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  </>
}

export default Footer