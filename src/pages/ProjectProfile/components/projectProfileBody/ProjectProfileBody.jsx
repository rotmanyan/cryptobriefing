import React from 'react';
import {ProjectProfilePartnerships} from "./projectProfilePartnerships/ProjectProfilePartnerships";
import {ProjectProfileChart} from "./projectProfileChart/ProjectProfileChart";
import {ProjectProfileAbout} from "./projectProfileAbout/ProjectProfileAbout";
import {ProjectProfileNews} from "./projectProfileNews/ProjectProfileNews";
import {ProjectProfileSwitcher} from "./projectProfileSwitcher/ProjectProfileSwitcher";
import ProjectProfileSidebar from "./projectProfileSidebar/ProjectProfileSidebar";

const ProjectProfileBody = (props) => {
  return (
    <>
      <ProjectProfileChart props={props}/>
      <div className="projectAbout__wrap">
        <div className="projectAbout__left">
          <ProjectProfileAbout props={props}/>
          <ProjectProfilePartnerships props={props}/>
          <ProjectProfileSwitcher props={props}/>
          <ProjectProfileNews props={props}/>
        </div>
        <div className="projectAbout__right">
          <ProjectProfileSidebar/>
        </div>
      </div>
    </>
  );
};

export default ProjectProfileBody;