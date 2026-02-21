import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  // 這裡的 className 對應你原本 style.css 裡的 .project-item
  return (
    <div className={`project-item ${project.fullWidth ? 'full-width' : ''}`}>
      <img src={project.img} alt={project.title} loading="lazy" />
      <div className="project-info">
        <p className="category">{project.tag}</p>
        <h4 className="name">{project.title}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;