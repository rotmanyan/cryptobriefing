import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import '../listed/listed.scss'

import All from "./all/All";
import Upcoming from "./upcoming/Upcoming";
import Ongoing from "./ongoing/Ongoing";
import Ended from "./ended/Ended";
import RecentlyAdded from "./recentlyAdded/RecentlyAdded";

const Sto = () => <Switch>
  <Route path='/dashboard/sto/all' component={All}/>
  <Route path='/dashboard/sto/upcoming' component={Upcoming}/>
  <Route path='/dashboard/sto/ongoing' component={Ongoing}/>
  <Route path='/dashboard/sto/ended' component={Ended}/>
  <Route path='/dashboard/sto/recentlyadded' component={RecentlyAdded}/>
  <Redirect to='/dashboard/sto/all'/>
</Switch>

export default Sto;