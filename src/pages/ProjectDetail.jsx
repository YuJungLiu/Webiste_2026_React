import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project || !project.details) return <div className="loading">Loading...</div>;

  const { details } = project;

  return (
    <div className="project-detail-container">
      {/* 核心：複用 Category Page 的背景漸層效果 */}
      <div className="gradient-background-overlay" />

      {/* 使用 Wrapper 確保內容在漸層之上 */}
      <div className="project-detail-content-wrapper">
        
        {/* 1. Hero 區 */}
        <div className="detail-hero">
          <div className="hero-image-box">
            <img src={details.coverImg} alt={project.title} className="hero-img" />
          </div>
          <div className="hero-gradient-overlay">
            <div className="hero-header-text">
              <h1 className="hero-title">{project.title}</h1>
              <p className="hero-subtitle">{details.subtitle}</p>
            </div>
          </div>
        </div>

        {/* 2. 資訊區 (70% 寬度) */}
        <section className="detail-meta-section">
          <div className="meta-grid">
            <div className="meta-item">
              <span className="meta-label">Individual Contribution</span>
              <p className="meta-value">{details.contribution}</p>
            </div>
            <div className="meta-item">
              <span className="meta-label">Credits</span>
              <p className="meta-value">{details.credits}</p>
            </div>
          </div>
        </section>

        {/* 3. 內容區 (70% 寬度) */}
        <main className="detail-main-content">
          {details.videoUrl && (
            <div className="detail-video-box">
              <iframe 
                src={details.videoUrl} 
                title="Project Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="detail-description">
            {details.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="detail-gallery">
            {details.screenshots.map((img, idx) => (
              <img key={idx} src={img} alt={`Slide ${idx}`} className="gallery-img" />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;