import React, { useEffect } from 'react'; // 合併後的唯一導入
import SubNav from '../components/SubNav';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import './CategoryPage.css';

const CategoryPage = ({ categoryType }) => {
  const data = projectsData[categoryType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryType]);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className={`category-page-container ${categoryType}-theme`}>
      <div className="gradient-background-overlay" />
      
      <SubNav sections={data.sections} />
      
      <main className="category-content-wrapper">
        {data.sections.map((section) => (
          <section key={section.id} id={section.id} className="page"> {/* 類別名稱改回 page */}
            <h1 className="page-title">{section.label}</h1>
            <p className="page-quote">{section.quote}</p>
            
            <div className="project-row"> {/* 使用原本的 project-row */}
              {section.projects.map(proj => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CategoryPage;