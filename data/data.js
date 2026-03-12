const projectsData = [
    {
        id: 1,
        title: "Food FlashCard",
        description: "A game for the people who love food and know their countries well. This is a game that matches the national dish to its country. It may have you second guessing several times but, I truly hope it is fun and encourages people to experiment with their taste buds.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        demoLink: "#",
        githubLink: "#",
        isPublic: false,
        loomEmbed: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/a5ca85b3a58d453d8e9e6f33d9d9dd02?sid=b0f4adbd-c1b4-44c7-b200-6474377d954d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
        category: "frontend",
        tags: ["React", "Node.js", "Javascript", "CSS", "Game", "Food"]
    },
    {
        id: 2,
        title: "Best Eats",
        description: "Includes the recipes and spots of all of my favorite foods in NYC and at home. I truly hope it would be a guide for anyone looking for a restaurant to explore.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        demoLink: "#",
        githubLink: "#",
        isPublic: false,
        loomEmbed: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/4d926c698610442a8686bb8daa8556d8?sid=d3b055ec-727b-4f64-8786-a614356182a4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
        category: "frontend",
        tags: ["React", "Node.js", "Javascript", "CSS", "Food"]
    },
    {
        id: 3,
        title: "Dog App",
        description: "This app allows users to carefully select which dog is a perfect fit for them. If the user does not like a certain attribute about one of the dogs they have viewed, they can always ban that attribute so they get the perfect fit for them.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        demoLink: "#",
        githubLink: "#",
        isPublic: false,
        loomEmbed: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/99b25aa4dd01494baac506f387a0bbf5?sid=3594804c-491f-4ab5-9bae-2bccafeb1308" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
        category: "frontend",
        tags: ["React", "Node.js", "Javascript", "CSS", "Dogs", "Animals", "API"]
    },
    {
        id: 4,
        title: "Recipe Finder",
        description: "This is a recipe finder app. You can search for what foods you are specifically looking for and you can also filter just for specific diets like gluten free, vegan and vegetarian",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        demoLink: "#",
        githubLink: "#",
        isPublic: false,
        loomEmbed: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/ba3a2b27ee794eb39b18dc84e0d483a9?sid=b4f91ee8-a0af-4703-8ed6-e592a0e9401b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
        category: "frontend",
        tags: ["React", "Node.js", "Javascript", "CSS", "Foods", "API"]
    },
    {
        id: 5,
        title: "Crewmates",
        description: "This is an AmongUs inspired app where you can form ideal crewmates. You can specify their color and speed. Delete the crewmate if you do not like them and edit their information.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        demoLink: "#",
        githubLink: "#",
        isPublic: false,
        loomEmbed: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/6b9f45110b9b4b098707bd4620a82581?sid=113225f9-4346-4d6f-8c91-31e1387172d0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
        category: "frontend",
        tags: ["React", "Node.js", "Javascript", "CSS", "Supabase", "API"]
    },
    {
        id: 6,
        title: "CommuniCare Website",
        description: "This is website for CommuniCare, a non-profit organization that provides healthcare services to underserved communities. The website includes information about the organization, its services, and how to get involved.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        demoLink: "#",
        githubLink: "#",
        isPublic: false,
        loomEmbed: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/14de02bf1e40448893fc76dd744d55ca?sid=9d4d5b2d-6ba3-4ccb-bfd1-c33db340a0ba" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
        category: "frontend",
        tags: ["React", "Node.js", "Javascript", "Tailwind CSS", "Healthcare", "Non-Profit"]
    },
];

const skillsData = [
    "Python", "JavaScript", "React", "Node.js", "HTML/CSS", "Git",
    "SQL", "Java", "Swift", "Docker", "OCaml", "Supabase"
];

// Derived from projectsData — add new tags to projects above and this updates automatically
const allTags = [...new Set(projectsData.flatMap(p => p.tags))];