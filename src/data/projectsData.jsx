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
          { id: 'wan', tag: 'Mobile Puzzle Game', title: 'Wando', img: '/assets/Wan_2.png', fullWidth: true },
          { id: 'tiny', tag: 'Adventure Parkour Game', title: 'Tiny Criminals', img: '/assets/Tiny_2.png', fullWidth: false},
          { id: 'no', tag: 'Simulation Game', title: 'No Signal', img: '/assets/No_2.png', fullWidth: false},
          { id: 'psy', tag: 'Desktop Pet', title: 'Psyqualogy (Coming Soon)', img: '/assets/Psy_2.png', fullWidth: true },
        ]
      },
      {
        id: "section-vr",
        label: "Virtual Reality",
        quote: "Think beyond, for the future of gaming.",
        isTwoCols: true,
        projects: [
          { id: 'spe', tag: 'MR Vocabulary Learning Game', title: 'Spelland', img: '/assets/Spe_1.png', fullWidth: false }
        ]
      },
      {
        id: "section-experimental",
        label: "Experimental",
        quote: "Random happiness.",
        projects: [
          { id: 'fire', tag: 'Game Poem', title: 'Moment', img: '/assets/Fire_1.png', fullWidth: false},
          { id: 'pop', tag: '2D Platformer Game', title: 'Popcorn Projection', img: '/assets/Pop_1.png', fullWidth: false}
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