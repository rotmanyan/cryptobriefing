import React from 'react';
import ProjectProfileSidebarProject from "../projectProfileSidebarProject/ProjectProfileSidebarProject";
import placeholder from 'assets/icons/TRN.svg';
import ProjectProfileTokenTable
    from "../projectProfileTokenInfo/components/projectProfileTokenTable/ProjectProfileTokenTable";


const ProjectProfileSimilarBlockchain = () => {
  return (
      <div className='sidebarWrapper sidebarWrapper--tablet'>
          <h1 className="sidebarWrapper__title">
              Similar <br/>
              Blockchain Projects
          </h1>
          <ProjectProfileSidebarProject img={placeholder} title='QProtocol' description='Blockchain Infrastructure'/>
          <ProjectProfileTokenTable title='' isProject={true}>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Country</div>
                  <div className="tokenTable__right">Switzerland</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Type of Entity</div>
                  <div className="tokenTable__right">Public Foundation</div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Token Type</div>
                  <div className="tokenTable__right">
                      <span className="tokenTable-text--gray">Security / ERC721</span>
                  </div>
              </div>
              <div className="tokenTable__item">
                  <div className="tokenTable__left">Whitelist / KYC</div>
                  <div className="tokenTable__right">
                    <span className="tokenTable-text--gray">Yes / No</span>
                  </div>
              </div>

          </ProjectProfileTokenTable>
      </div>
  );
};

export default ProjectProfileSimilarBlockchain;