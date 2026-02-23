export const projectsData = {
  game: {
    title: "Game Dev",
    sections: [
      {
        id: "section-mobile",
        label: "Game",
        quote: "Enjoy, and have fun !",
        isTwoCols: true,
        projects: [
          { 
            id: 'wando', 
            tag: 'Mobile Puzzle Game', 
            title: 'Wando', 
            img: '/assets/Wan_2.png', 
            fullWidth: false,
            details: {
              coverImg: '/assets/Wan_3.png', 
              subtitle: 'Mobile Indie Puzzle Game',
              year: '2024',
              contribution: 'Game Director (Game & Level, UIUX, Sound, Motion Designer)',
              credits: '劉有容(Liu Yu-Jung), 白雅云(Pai Ya-Yun), 何政勳(Jason Ho)',
              videoUrl: 'https://www.youtube.com/embed/GD-1PSTsYtg?si=mGDYdKCr_URmwZvR', 
              description: `“Wando” is a therapeutic and artistic puzzle game. The game is themed around nature and ancient civilizations, and players can embark on adventure with protagonist "Kgoro" to experience various puzzles. 
              
              Using spells to transform plants and creating a path connecting the beginning and the endpoint. Through these actions, players can help Kgoro overcome challenges and continue his journey into the unknown.
              
              Honors |
              2024 AppStore Regional Featured     'Today' recommendation & Banner
              2023 Bahamut ACG Award     Merit
              2023 Vision Get Wild Award     Silver`, 
              screenshots: [
                '/assets/portfolio/Wan_P_1.jpg',
                '/assets/portfolio/Wan_P_2.jpg',
                '/assets/portfolio/Wan_P_3.jpg',
                '/assets/portfolio/Wan_P_4.jpg',
                '/assets/portfolio/Wan_P_5.jpg',
                '/assets/portfolio/Wan_P_6.jpg',
              ]
            }
          },
          { id: 'tiny-criminals', tag: 'Adventure Parkour Game', title: 'Tiny Criminals', img: '/assets/Tiny_2.png', fullWidth: false},
          // { id: 'psyqualogy', tag: 'Desktop Pet', title: 'Psyqualogy (Coming Soon)', img: '/assets/Psy_2.png', fullWidth: false },
        ]
      },
      {
        id: "section-vr",
        label: "Virtual Reality",
        quote: "Think beyond, for the future of gaming.",
        isTwoCols: true,
        projects: [
          { id: 'spelland', tag: 'MR Vocabulary Learning Game', title: 'Spelland', img: '/assets/Spe_1.png', fullWidth: false }
        ]
      },
      {
        id: "section-experimental",
        label: "Experimental",
        quote: "Random happiness.",
        projects: [
          { id: 'no-signal', tag: 'Simulation Game', title: 'No Signal', img: '/assets/No_2.png', fullWidth: true},
          { id: 'moment', tag: 'Game Poem', title: 'Moment', img: '/assets/Fire_1.png', fullWidth: false},
          { id: 'popcorn-projection', tag: '2D Platformer Game', title: 'Popcorn Projection', img: '/assets/Pop_1.png', fullWidth: false}
        ]
      }
    ]
  },
  ux: {
    title: "UX Design",
    sections: [
      {
        id: "section-app",
        label: "Service Design",
        quote: "More than thoughtful.",
        projects: [
          { id: 'yam', tag: 'Music Education Rebranding', title: 'Yamaha Adults', img: '/assets/Yam_1.png', fullWidth: false },
          { id: 'pla', tag: 'Sustainable Green Roof Gardening Service', title: 'Plantoholic', img: '/assets/Pla_2.png', fullWidth: false }
        ]
      },
    ]
  },
  media: {
    title: "Media Art",
    sections: [
      {
        id: "section-sound",
        label: "Sound & Art",
        quote: "The harmony of code and noise.",
        projects: [
          { id: 'no1', tag: 'Installation', title: 'Digital Echo', img: '/assets/No_1.png', desc: 'Sound reactive visuals.', fullWidth: false }
        ]
      }
    ]
  }
};

export const getProjectById = (id) => {
  // 遍歷所有分類 (game, ux, media...)
  for (const cat in projectsData) {
    // 遍歷該分類下的所有 section
    for (const section of projectsData[cat].sections) {
      // 尋找 ID 匹配的專案
      const project = section.projects.find(p => p.id === id);
      if (project) return project;
    }
  }
  return null;
};