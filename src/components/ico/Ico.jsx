import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './ico.scss'

import All from './all/All'
import Upcoming from './upcoming/Upcoming'
import Ongoing from './ongoing/Ongoing'
import Ended from './ended/Ended'
import RecentlyAdded from './recentlyAdded/RecentlyAdded'

const Ico = () => <Switch>
  <Route path='/dashboard/ico/all' component={All}/>
  <Route path='/dashboard/ico/upcoming' component={Upcoming}/>
  <Route path='/dashboard/ico/ongoing' component={Ongoing}/>
  <Route path='/dashboard/ico/ended' component={Ended}/>
  <Route path='/dashboard/ico/recentlyadded' component={RecentlyAdded}/>
  <Redirect to='/dashboard/ico/all'/>
</Switch>

export default Ico

// changePage = () => this.setState({page this.state.page + 1})