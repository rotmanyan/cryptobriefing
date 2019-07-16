import React from 'react';
import ProjectProfileTokenInfo from "./components/projectProfileTokenInfo/ProjectProfileTokenInfo";
import ProjectProfileSimilarBlockchain
  from "./components/projectProfileSimilarBlockchain/ProjectProfileSimilarBlockchain";
import ProjectProfileSimilarTraditional
    from "./components/projectProfileSimilarTraditional/ProjectProfileSimilarTraditional";

const ProjectProfileSidebar = () => {
  return (
    <>
      <ProjectProfileTokenInfo/>
      <ProjectProfileSimilarBlockchain/>
        <ProjectProfileSimilarTraditional/>

    </>
  );
};

export default ProjectProfileSidebar;