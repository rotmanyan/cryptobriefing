import React from 'react'
import {Switch, NavLink, Route, Redirect} from 'react-router-dom'
import ProjectProfileFunding from "./components/projectProfileFunding/ProjectProfileFunding";
import ProjectProfileListing from "./components/projectProfileListing/ProjectProfileListing";
import ProjectProfileTeam from "./components/projectProfileTeam/ProjectProfileTeam";
import ProjectProfileRoadmap from "./components/projectProfileRoadmap/ProjectProfileRoadmap";
import './projectProfileSwitcher.scss'

export const ProjectProfileSwitcher = () =>
  <div className='projectSwitcher'>

    <div className="dashboard__navigation dashboard__navigation--tabs">
      <NavLink
        className='navigation__item navigation__item--tab'
        activeClassName='navigation__item--active navigation__item--inversionActive'
        to='/projectProfile/funding'>
        Funding
      </NavLink>
      <NavLink
        className='navigation__item navigation__item--tab'
        activeClassName='navigation__item--active navigation__item--inversionActive'
        to='/projectProfile/listing'>
        Listing
      </NavLink>
      <NavLink
        className='navigation__item navigation__item--tab'
        activeClassName='navigation__item--active navigation__item--inversionActive'
        to='/projectProfile/roadmap'>
        Roadmap
      </NavLink>
      <NavLink
        className='navigation__item navigation__item--tab'
        activeClassName='navigation__item--active navigation__item--inversionActive'
        to='/projectProfile/team'>
        Team
      </NavLink>
    </div>

    <Switch>
      <Route path='/projectProfile' component={ProjectProfileFunding}/>
      <Route path='/projectProfile/listing' component={ProjectProfileListing}/>
      <Route path='/projectProfile/roadmap' component={ProjectProfileRoadmap}/>
      <Route path='/projectProfile/team' component={ProjectProfileTeam}/>
      <Redirect to='/projectProfile'/>
    </Switch>
  </div>