import React from 'react';
import ProjectProfileFinancial from "./components/projectProfileFinancial/ProjectProfileFinancial";
import ProjectProfileGeneral from "./components/projectProfileGeneral/ProjectProfileGeneral";
import ProjectProfileTokenDistribution
  from "./components/projectProfileTokenDistribution/ProjectProfileTokenDistribution";
import '../../projectProfileSidebar.scss';

const ProjectProfileTokenInfo = () => {
  return (
    <div className="tokenInfo sidebarWrapper">
      <h1 className="tokenInfo__title sidebarWrapper__title">Token info</h1>
      <ProjectProfileFinancial/>
      <ProjectProfileGeneral/>
      <ProjectProfileTokenDistribution/>
    </div>
  );
};

export default ProjectProfileTokenInfo;