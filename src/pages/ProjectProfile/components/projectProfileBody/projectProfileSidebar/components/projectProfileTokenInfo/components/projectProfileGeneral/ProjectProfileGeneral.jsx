import React from 'react';
import ProjectProfileTokenTable from "../projectProfileTokenTable/ProjectProfileTokenTable";

const ProjectProfileGeneral = () => {
  return (
        <ProjectProfileTokenTable title='General'>
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
                    Security / ERC721
                </div>
            </div>
            <div className="tokenTable__item">
                <div className="tokenTable__left">Whitelist / KYC</div>
                <div className="tokenTable__right">
                    Yes / No
                </div>
            </div>
            <div className="tokenTable__item">
                <div className="tokenTable__left">Country Limitations</div>
                <div className="tokenTable__right">
                    China, Japan, USA, Russia, Belarus, Ukraine
                </div>
            </div>
        </ProjectProfileTokenTable>
  );
};

export default ProjectProfileGeneral;