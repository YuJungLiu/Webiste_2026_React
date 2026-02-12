import React from 'react';
import './Display.css';

const Display = () => {
    const projects = [
        // { name: 'Psyqualogy', img: 'assets/Psy_1.png' },
        { name: 'Wando', img: 'assets/Wan_1.png' },
        { name: 'Tiny Criminals', img: 'assets/Tiny_1.png' },
        { name: 'Spelland', img: 'assets/Spe_1.png' },
        { name: 'No Signal', img: 'assets/No_1.png' },
    ];

    return (
        <section className="game-display-section">
            <div className="scroll-wrapper">
                {projects.map((proj, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={proj.img} alt={proj.name} />
                        <div className="overlay">
                            <div className="project-name">{proj.name}</div>
                        </div>
                    </div>
                ))}
            </div>
            <h3><a href="/game">Game</a></h3>
        </section>
    );
};

export default Display;