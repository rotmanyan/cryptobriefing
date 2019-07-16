import React, {Component} from 'react'
import './about.scss'
import close from 'assets/icons/ic-close.svg'
import placeholder from 'assets/icons/100x100.png'

class About extends Component {
  state = {
    windowValue: '',
    navValue: ''
  }

  openWindow = e => {
    this.setState({windowValue: e.target.value})
  }

  handleWindow = () => {
    this.setState({windowValue: ''})
  }

  render() {
    const {windowValue} = this.state

    return (
      <>
        <div className="wrapper--black">
          <div className="container">
            <div className="news-wrapper-title ">
              <h1 className='dashboard__title'>About</h1>
            </div>
          </div>
        </div>
        <div className="wrapper--default">
          <div className="container about__container">
            <div className="about__left">

              {/* BEGIN About CryptoBriefing */}
              <div id='about' className="about">
                <h2 className='about__description'>About CryptoBriefing</h2>
                <p>
                  Crypto Briefing exists to advocate for the safe and responsible integration of blockchain and
                  cryptocurrency into mainstream life. We believe.
                </p>
                <p>
                  Our goal is to grow the crypto community - to help new converts understand the basics, and to help
                  more
                  experienced enthusiasts separate the good from the bad and the ugly.
                </p>
                <p>
                  We are also committed to the principles of equal opportunity defined in The Collective Future's
                  Blockchain
                  Inclusive and Diverse Pledge.
                </p>
                <p>
                  Our entire site, including our digital asset report section, is independent and unpaid.
                </p>
                <p>
                  We do not EVER publish ads or sponsored stories and we clearly identify the digital asset holdings of
                  each
                  and every author.
                </p>
                <p>
                  We are backed by some of the top investors in the blockchain space, including:
                </p>
                <p>
                  YouBi Capital * Fenbushi Capital * DHVC * Neo Global Capital * PreAngel * Goopal Digital Capital *
                  Block
                  72 * Lucen Accelerator * WanFund * Game Theory Group
                </p>
              </div>
              {/* END About CryptoBriefing */}

              {/* BEGIN Executive Team */}
              <div id='executive-team' className="executive-team">
                <h2>Executive Team</h2>

                <div className="executive-team__wrapper">

                  <div className="executive-team__item">
                    <img src={placeholder} alt="" className='executive-team__icon'/>
                    <div className="executive-team__description">
                      <h3>Han Kao</h3>
                      <p className='executive-team__position'>Founder, CEO</p>
                      <p>He grew up in New York City and graduated from Columbia University with a B.A.
                        in…</p>
                      <button value='Han Kao' onClick={e => this.openWindow(e)} className='show-more'>Show more</button>
                    </div>

                    {windowValue === 'Han Kao' ? <div className="executive-team__detail">
                      <img onClick={this.handleWindow} className='executive-team__close' src={close} alt='close'/>
                      <img src={placeholder} alt="" className='executive-team__icon'/>
                      <div className="executive-team__description">
                        <h3>Han Kao</h3>
                        <p className='executive-team__position'>Founder, CEO</p>
                        <div className="executive-team__info">
                          <p className=''>Han is the Founder and CEO of Crypto Briefing. He grew up in New York City and
                            graduated from Columbia University with a B.A. in Economics. He is a serial entrepreneur who
                            has founded and exited several companies in tech and media over the past 15 years. Han
                            currently spends his time consulting and actively investing in ICOs and blockchain entities,
                            and is now based in Los Angeles.</p>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Linkedin</a>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Twitter</a>
                        </div>
                      </div>
                    </div> : null}

                  </div>

                  <div className="executive-team__item">
                    <img src={placeholder} alt="" className='executive-team__icon'/>
                    <div className="executive-team__description">
                      <h3>Jon Rice</h3>
                      <p className='executive-team__position'>Co-founder, Managing Editor</p>
                      <p>He likes to build things. Especially communities. By participating positively in our…</p>
                      <button value='Jon Rice' onClick={e => this.openWindow(e)} className='show-more'>Show more
                      </button>
                    </div>

                    {windowValue === 'Jon Rice' ? <div className="executive-team__detail">
                      <img onClick={this.handleWindow} className='executive-team__close' src={close} alt='close'/>
                      <img src={placeholder} alt="" className='executive-team__icon'/>
                      <div className="executive-team__description">
                        <h3>Jon Rice</h3>
                        <p className='executive-team__position'>Founder, CEO</p>
                        <div className="executive-team__info">
                          <p className=''>Han is the Founder and CEO of Crypto Briefing. He grew up in New York City and
                            graduated from Columbia University with a B.A. in Economics. He is a serial entrepreneur who
                            has founded and exited several companies in tech and media over the past 15 years. Han
                            currently spends his time consulting and actively investing in ICOs and blockchain entities,
                            and is now based in Los Angeles.</p>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Linkedin</a>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Twitter</a>
                        </div>
                      </div>
                    </div> : null}
                  </div>

                  <div className="executive-team__item">
                    <img src={placeholder} alt="" className='executive-team__icon'/>
                    <div className="executive-team__description">
                      <h3>Jay Putera</h3>
                      <p className='executive-team__position'>Business Development Director</p>
                      <p>He is a New Yorker whose experience in the hotel, leisure and tech marketing industries…</p>
                      <button value='Jay Putera' onClick={e => this.openWindow(e)} className='show-more'>Show more
                      </button>
                    </div>

                    {windowValue === 'Jay Putera' ? <div className="executive-team__detail">
                      <img onClick={this.handleWindow} className='executive-team__close' src={close} alt='close'/>
                      <img src={placeholder} alt="" className='executive-team__icon'/>
                      <div className="executive-team__description">
                        <h3>Jay Putera</h3>
                        <p className='executive-team__position'>Founder, CEO</p>
                        <div className="executive-team__info">
                          <p className=''>Han is the Founder and CEO of Crypto Briefing. He grew up in New York City and
                            graduated from Columbia University with a B.A. in Economics. He is a serial entrepreneur who
                            has founded and exited several companies in tech and media over the past 15 years. Han
                            currently spends his time consulting and actively investing in ICOs and blockchain entities,
                            and is now based in Los Angeles.</p>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Linkedin</a>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Twitter</a>
                        </div>
                      </div>
                    </div> : null}
                  </div>

                  <div className="executive-team__item">
                    <img src={placeholder} alt="" className='executive-team__icon'/>
                    <div className="executive-team__description">
                      <h3>Ilya Abugov</h3>
                      <p className='executive-team__position'>Head of Product and Research</p>
                      <p>He comes from an investment analytics background, having worked as an equities portfolio…</p>
                      <button value='Ilya Abugov' onClick={e => this.openWindow(e)} className='show-more'>Show more
                      </button>
                    </div>

                    {windowValue === 'Ilya Abugov' ? <div className="executive-team__detail">
                      <img onClick={this.handleWindow} className='executive-team__close' src={close} alt='close'/>
                      <img src={placeholder} alt="" className='executive-team__icon'/>
                      <div className="executive-team__description">
                        <h3>Ilya Abugov</h3>
                        <p className='executive-team__position'>Founder, CEO</p>
                        <div className="executive-team__info">
                          <p className=''>Han is the Founder and CEO of Crypto Briefing. He grew up in New York City and
                            graduated from Columbia University with a B.A. in Economics. He is a serial entrepreneur who
                            has founded and exited several companies in tech and media over the past 15 years. Han
                            currently spends his time consulting and actively investing in ICOs and blockchain entities,
                            and is now based in Los Angeles.</p>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Linkedin</a>
                          <a href="/123" rel="noopener noreferrer" target='_blank'>Twitter</a>
                        </div>
                      </div>
                    </div> : null}
                  </div>
                </div>

                <div className="executive-team__item">
                  <img src={placeholder} alt="" className='executive-team__icon'/>
                  <div className="executive-team__description">
                    <h3>Andre Cronje</h3>
                    <p className='executive-team__position'>Software Architect</p>
                    <p>After completing his 3 year computer science course in 5 months he was asked to stay…</p>
                    <button value='Andre Cronje' onClick={e => this.openWindow(e)} className='show-more'>Show more
                    </button>
                  </div>

                  {windowValue === 'Andre Cronje' ? <div className="executive-team__detail">
                    <img onClick={this.handleWindow} className='executive-team__close' src={close} alt='close'/>
                    <img src={placeholder} alt="" className='executive-team__icon'/>
                    <div className="executive-team__description">
                      <h3>Andre Cronje</h3>
                      <p className='executive-team__position'>Founder, CEO</p>
                      <div className="executive-team__info">
                        <p className=''>Han is the Founder and CEO of Crypto Briefing. He grew up in New York City and
                          graduated from Columbia University with a B.A. in Economics. He is a serial entrepreneur who
                          has founded and exited several companies in tech and media over the past 15 years. Han
                          currently spends his time consulting and actively investing in ICOs and blockchain entities,
                          and is now based in Los Angeles.</p>
                        <a href="/123" rel="noopener noreferrer" target='_blank'>Linkedin</a>
                        <a href="/123" rel="noopener noreferrer" target='_blank'>Twitter</a>
                      </div>
                    </div>
                  </div> : null}
                </div>

              </div>
              {/* END Executive Team */}

              {/* BEGIN  Frequently Asked Questions */}
              <div id='faq' className="faq">
                <h2 className='about__description'>Frequently Asked Questions</h2>

                <div className="faq__item">
                  <input id='coins' className="faq__title" type="checkbox"/>
                  <label className='faq__label' htmlFor="coins">Coins</label>
                  <p className="faq__description">
                    0x Aelf Aeternity Aion Altcoins Ardor Augur Basic Attention Token Bitcoin Bitcoin Cash Bitcoin
                    Diamond
                    Bitcoin Gold Bitcoin SV Bitshares BNB Bytecoin Bytom Cardano ChainLink Dash Decentraland Decred
                    Dentacoin DigiByte Dogecoin Dragonchain Elastos Electroneum EOS Ethereum Ethereum Classic Forks
                    Golem
                    GXChain Hcash Holochain ICON IOST IOTA Komodo Kyber Network Lisk Litecoin Loopring Maker
                    MedicalChain
                    Metaverse Mithril MOAC Monero Nano NEM NEO OmiseGo Ontology Polymath Populous Privacy Coins Qtum
                    Quantstamp Raiden Rchain ReddCoin Request Network Siacoin Stablecoins Status Steem Stellar Stratis
                    Substratum TenX Tether Tezos TRON VeChain Verge Wanchain Waves XRP Zcash Zilliqa
                  </p>
                </div>
                <div className="faq__item">
                  <input id='news' className="faq__title" type="checkbox"/>
                  <label className='faq__label' htmlFor="news">News</label>
                  <p className="faq__description">
                    News...
                  </p>
                </div>
                <div className="faq__item">
                  <input id='industries' className="faq__title" type="checkbox"/>
                  <label className='faq__label' htmlFor="industries">Industries</label>
                  <p className="faq__description">
                    Industries...
                  </p>
                </div>
                <div className="faq__item">
                  <input id='blockchain_tech' className="faq__title" type="checkbox"/>
                  <label className='faq__label' htmlFor="blockchain_tech">Blockchain Tech</label>
                  <p className="faq__description">
                    Blockchain Tech...
                  </p>
                </div>
                <div className="faq__item">
                  <input id='exchanges' className="faq__title" type="checkbox"/>
                  <label className='faq__label' htmlFor="exchanges">Exchanges</label>
                  <p className="faq__description">
                    Exchanges...
                  </p>
                </div>
                <div className="faq__item">
                  <input id='regions' className="faq__title" type="checkbox"/>
                  <label className='faq__label' htmlFor="regions">Regions</label>
                  <p className="faq__description">
                    Regions...
                  </p>
                </div>

              </div>
              {/* END  Frequently Asked Questions */}
            </div>
            <nav className='about__right'>
              <a href='#about'>About CryptoBriefing</a>
              <a href='#executive-team'>Executive Team</a>
              <a href='#faq'>FAQ</a>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default About