import React from 'react'
import ProjectProfileSidebarProject from '../projectProfileSidebarProject/ProjectProfileSidebarProject'
import placeholder from 'assets/icons/TRN.svg'


const ProjectProfileSimilarTraditional = () => {


  return (
      <div className='sidebarWrapper sidebarWrapper--tablet'>
          <h1 className="sidebarWrapper__title">
              Similar <br/>
              Traditional Projects
          </h1>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
      </div>
  );
};

export default ProjectProfileSimilarTraditional;