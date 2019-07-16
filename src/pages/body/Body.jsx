import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Portfolio from "../portfolio/Portfolio";
import Charts from "../charts/Charts";
import News from "../news/News";
import About from "../about/About";
import Registration from "../registration/Registration";
import Profile from "../profile/Profile";
import ProjectProfile from "../ProjectProfile/ProjectProfile";
import Admin from '../admin/Admin';

const Body = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/charts" component={Charts}/>
      <Route path="/news" component={News}/>
      <Route path="/about" component={About}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/projectProfile" component={ProjectProfile}/>
      <Redirect to="/dashboard"/>

    </Switch>
  );
};

export default Body;
