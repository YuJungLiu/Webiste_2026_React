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

  if (!project || !project.details) return <div className="loading">Loading Project...</div>;

  const { details } = project;

  return (
    <div className="project-detail-container">
      {/* 複用 Category Page 的背景漸層 */}
      <div className="gradient-background-overlay" />

      <div className="project-detail-content-wrapper">
        {/* 1. Hero 封面圖區 (純圖片，不疊文字) */}
        <div className="detail-hero">
          <img src={details.coverImg} alt={project.title} className="hero-img" />
        </div>

        {/* 2. 標題資訊區 (位於圖片下方) */}
        <header className="detail-header-section">
          <h1 className="hero-title">{project.title}</h1>
          <p className="hero-subtitle">{details.subtitle}</p>
          {details.year && <p className="hero-year">{details.year}</p>}
        </header>

        {/* 3. 製作資訊區 (Contribution & Credits) */}
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

        {/* 4. 主內容區 (影片、介紹、截圖) */}
        <main className="detail-main-content">
          {/* YouTube 影片 (條件渲染) */}
          {details.videoUrl && (
            <div className="detail-video-box">
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

          {/* 專案描述文字 (處理換行) */}
          <div className="detail-description">
            {details.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* 作品集截圖清單 */}
          <div className="detail-gallery">
            {details.screenshots.map((img, idx) => (
              <img key={idx} src={img} alt={`Work ${idx}`} className="gallery-img" />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;