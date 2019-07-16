import React from 'react'
import {Route, Switch} from "react-router-dom";
import ProjectProfileChartOneDay from "./components/projectProfileChartOneDay/ProjectProfileChartOneDay";

export const ProjectProfileChart = () => <Switch>
  <Route path='/projectProfile' component={ProjectProfileChartOneDay}/>
</Switch>