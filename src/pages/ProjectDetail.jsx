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
      {/* 1. 寬版封面圖 & 漸層標題 */}
      <div className="project-hero">
        <img src={details.coverImg} alt={project.title} className="hero-cover" />
        {/* 這裡複用你 Category Page 的漸層邏輯 */}
        <div className="hero-gradient-overlay">
          <div className="hero-text">
            <h1>{project.title}</h1>
            <p>{details.subtitle}</p>
          </div>
        </div>
      </div>

      {/* 2. 貢獻與製作名單 */}
      <section className="project-meta-info">
        <div className="info-column">
          <h3>Individual Contribution</h3>
          <p>{details.contribution}</p>
        </div>
        <div className="info-column">
          <h3>Credits</h3>
          <p>{details.credits}</p>
        </div>
      </section>

      {/* 3. 專案內容 (70% 寬度) */}
      <main className="project-main-content">
        {/* 有影片的版本 */}
        {details.videoUrl && (
          <div className="video-container">
            <iframe 
              src={details.videoUrl} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* 換行段落樣式 */}
        <div className="project-description">
          {details.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* 作品集截圖 */}
        <div className="project-screenshots">
          {details.screenshots.map((src, index) => (
            <img key={index} src={src} alt={`Shot ${index}`} className="screenshot-item" />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;