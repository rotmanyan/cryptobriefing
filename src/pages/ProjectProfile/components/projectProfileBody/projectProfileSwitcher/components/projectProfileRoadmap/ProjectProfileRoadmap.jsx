import React from 'react';
import './ProjectProfileRoadmap.scss'

const ProjectProfileRoadmap = () =>
  <>

    <div className="roadmap__wrapper">
      <div className="roadmap__line"/>

      <div className="roadmap__item">
        <div className="roadmap__date">Jan 2018</div>
        <div className="roadmap__status">
          <span className='roadmap__status--done'>
              <svg className='roadmap__checked' xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 16 16">
                  <path fill="#02c88a" fillRule="nonzero" d="M1 7l2-2 4 4 7-7 2 2-9 9z"/>
              </svg>
          </span>
        </div>
        <div className="roadmap__description">
          Launching the token crowdsale (ICO) and getting listed on a top exchange.
        </div>
      </div>

      <div className="roadmap__item">
        <div className="roadmap__date roadmap__date--progress">Jan 2018</div>
        <div className="roadmap__status">
          <div className="roadmap__status--progress"/>
        </div>
        <div className="roadmap__description">
          Launching the token crowdsale (ICO) and getting listed on a top exchange.
        </div>
      </div>

    </div>

  </>

export default ProjectProfileRoadmap;