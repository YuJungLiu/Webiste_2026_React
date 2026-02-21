export const projectsData = {
  game: {
    title: "Game Dev",
    sections: [
      {
        id: "section-mobile",
        label: "Mobile Games",
        quote: "Small screens, big adventures.",
        projects: [
          { id: 'wan', tag: 'Mobile Puzzle Game', title: 'Wando', img: '/assets/Wan_2.png', desc: 'A magical forest adventure.' },
          { id: 'tiny', tag: 'Adventure Parkour Game', title: 'Tiny Criminals', img: '/assets/Tiny_2.png', desc: 'Fast-paced escape game.' }
        ]
      },
      {
        id: "section-vr",
        label: "Virtual Reality",
        quote: "Think beyond, for the future of gaming.",
        projects: [
          { id: 'spe', tag: 'VR Experience', title: 'Space Walker', img: '/assets/Spe_2.png', desc: 'Exploring the unknown universe.' }
        ]
      },
      {
        id: "section-experimental",
        label: "Experimental",
        quote: "Random happiness.",
        projects: [
          { id: 'psy', tag: 'Web Interaction', title: 'Psychic Test', img: '/assets/Psy_2.png', desc: 'A simple interactive experiment.' }
        ]
      }
    ]
  },
  ux: {
    title: "UX Design",
    sections: [
      {
        id: "section-app",
        label: "App Design",
        quote: "Focus on user-centric solutions.",
        projects: [
          { id: 'avo', tag: 'App Design', title: 'AvoApp', img: '/assets/Avo_1.png', desc: 'Healthy lifestyle tracker.' }
        ]
      },
      {
        id: "section-web",
        label: "Web Design",
        quote: "Modernizing digital experiences.",
        projects: [
          { id: 'udn', tag: 'Web News', title: 'Udn Redesign', img: '/assets/Udn_1.png', desc: 'News reading experience.' }
        ]
      }
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
          { id: 'no1', tag: 'Installation', title: 'Digital Echo', img: '/assets/No_1.png', desc: 'Sound reactive visuals.' }
        ]
      }
    ]
  }
};