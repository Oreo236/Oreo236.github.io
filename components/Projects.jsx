function Projects({ projects, activeTab, setActiveTab, openVideoModal, searchTerm, setSearchTerm, activeTags, toggleTag }) {
    const categories = ["all", "frontend", "backend", "fullstack"];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeTab === "all" || project.category === activeTab;
        const matchesSearch   = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTags     = activeTags.length === 0 ||
                                project.tags.some(tag => activeTags.includes(tag));
        return matchesCategory && matchesSearch && matchesTags;
    });

    return (
        <section id="projects" style={{ backgroundColor: '#fef7fa' }}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    I included the demonstrations via Loom for most of my web apps here. For Swift, I will need some patience in updating because my projects are not running on Xcode currently.
                </p>

                {/* Search */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Tag filters */}
                <div className="filter-container">
                    {allTags.map(tag => (
                        <div
                            key={tag}
                            className={`filter-tag ${activeTags.includes(tag) ? 'active' : ''}`}
                            onClick={() => toggleTag(tag)}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Category tabs */}
                <div className="tab-container">
                    {categories.map(cat => (
                        <div
                            key={cat}
                            className={`tab ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </div>
                    ))}
                </div>

                {/* Grid */}
                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} openVideoModal={openVideoModal} />
                        ))
                    ) : (
                        <div className="no-projects">
                            <h3>No projects found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="https://github.com/Oreo236" className="btn" target="_blank">View My GitHub Profile</a>
                </div>
            </div>
        </section>
    );
}