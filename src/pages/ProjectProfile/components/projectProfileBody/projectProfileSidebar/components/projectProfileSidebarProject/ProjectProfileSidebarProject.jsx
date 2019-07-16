import React from 'react';
import './ProjectProfileSidebarProject.scss';

const ProjectProfileSidebarProject = ({title, description, img}) => {
    return(
        <a href="/" className='sidebarWrapper__project'>
            <img src={img} alt={img} className='sidebarWrapper__project-img'/>
            <div className="sidebarWrapper__project-data">
                <h5 className="sidebarWrapper__project-title">{title}</h5>
                <p className="sidebarWrapper__project-description">{description}</p>
            </div>
        </a>
    )
}

export default ProjectProfileSidebarProject;