import React from 'react';
import './projectProfileTokenTable.scss';


const ProjectProfileTokenTable = ({ children, title, isProject }) => {
    return (
        <div className={isProject ? "tokenTable tokenTable--project" : "tokenTable"}>
            <h3 className="tokenTable__title">{title}</h3>
            {children}
        </div>
    );
};

export default ProjectProfileTokenTable;