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
            fullWidth: true,
            details: {
              coverImg: '/assets/Wan_1.png', 
              subtitle: 'A magical puzzle adventure in the forest.',
              contribution: 'Lead Game Designer, Programmer',
              credits: 'Art: User A / Sound: User B',
              videoUrl: 'https://www.youtube.com/embed/GD-1PSTsYtg?si=mGDYdKCr_URmwZvR', // 你提供的嵌入網址
              description: `Wando 是一款充滿奇幻色彩的益智冒險遊戲。\n\n玩家需要操控主角在神秘的森林中解開重重謎題，透過獨特的物理互動機制，探索這個世界的真相。`,
              screenshots: [
                '/assets/Wan_2.png',
                '/assets/Wan_1.png'
              ]
            }
          },
          { id: 'tiny-criminals', tag: 'Adventure Parkour Game', title: 'Tiny Criminals', img: '/assets/Tiny_2.png', fullWidth: false},
          { id: 'no-signal', tag: 'Simulation Game', title: 'No Signal', img: '/assets/No_2.png', fullWidth: false},
          { id: 'psyqualogy', tag: 'Desktop Pet', title: 'Psyqualogy (Coming Soon)', img: '/assets/Psy_2.png', fullWidth: true },
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