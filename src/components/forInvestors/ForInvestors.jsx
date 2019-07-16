import React from 'react';
import './forInvestors.scss'
import {Redirect, Route, Switch} from "react-router-dom";
import ForInvestorsOneDay from "./components/forInvestorsOneDay/ForInvestorsOneDay";
import ForInvestorsSevenDay from "./components/forInvestorsSevenDay/ForInvestorsSevenDay";
import ForInvestorsOneMonth from "./components/forInvestorsOneMonth/ForInvestorsOneMonth";
import ForInvestorsQuartal from "./components/forInvestorsQuartal/ForInvestorsQuartal";
import ForInvestorsHalfYear from "./components/forInvestorsHalfYear/ForInvestorsHalfYear";
import ForInvestorsYear from "./components/forInvestorsYear/ForInvestorsYear";
import ForInvestorsAll from "./components/forInvestorsAll/ForInvestorsAll";

export const ForInvestors = () =>
  <div className='forInvestors'>
    <Switch>
      <Route path='/charts/forInvestors/1d' component={ForInvestorsOneDay}/>
      <Route path='/charts/forInvestors/7d' component={ForInvestorsSevenDay}/>
      <Route path='/charts/forInvestors/1m' component={ForInvestorsOneMonth}/>
      <Route path='/charts/forInvestors/q' component={ForInvestorsQuartal}/>
      <Route path='/charts/forInvestors/hy' component={ForInvestorsHalfYear}/>
      <Route path='/charts/forInvestors/1y' component={ForInvestorsYear}/>
      <Route path='/charts/forInvestors/all' component={ForInvestorsAll}/>
      <Redirect to='/charts/forInvestors/all'/>
    </Switch>
  </div>