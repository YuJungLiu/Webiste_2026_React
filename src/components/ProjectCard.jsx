import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-item ${project.fullWidth ? 'full-width' : ''}`}>
      <div className="project-image-wrapper">
        <img src={project.img} alt={project.title} loading="lazy" />
      </div>
      <div className="project-info">
        <p className="category">{project.tag}</p>
        <p className="name">{project.title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;