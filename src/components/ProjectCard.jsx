import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className={`project-item ${project.fullWidth ? 'full-width' : ''}`}>
      {/* 原本內部的代碼不變 */}
      <div className="project-image-wrapper">
        <img src={project.img} alt={project.title} loading="lazy" />
      </div>
      <div className="project-info">
        <p className="category">{project.tag}</p>
        <p className="name">{project.title}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;