import React from 'react'
import './projectProfilePartnerships.scss'
import placeholder from 'assets/icons/160x90.png'
import ProjectProfilePartnershipsMobileSlider from './components/ProjectProfilePartnershipMobileSlider'

export const ProjectProfilePartnerships = () =>
  <>
    <div className='projectPartnerships'>
      <h2 className='projectPartnerships__title'>Partnerships</h2>
          <div className='projectPartnerships__wrapper'>
              <img src={placeholder} alt=""/>
              <img src={placeholder} alt=""/>
              <img src={placeholder} alt=""/>
              <img src={placeholder} alt=""/>
              <img src={placeholder} alt=""/>
              <img src={placeholder} alt=""/>
          </div>
         <ProjectProfilePartnershipsMobileSlider />
    </div>
  </>