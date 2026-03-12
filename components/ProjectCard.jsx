function ProjectCard({ project, openVideoModal }) {
    return (
        <div className="project-card">
            {project.loomEmbed ? (
                <div className="loom-embed" dangerouslySetInnerHTML={{ __html: project.loomEmbed }} />
            ) : (
                <img src={project.image} alt={project.title} className="project-img" />
            )}

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={project.demoLink} className="btn">Live Demo</a>
                    {project.isPublic ? (
                        <a href={project.githubLink} className="btn btn-outline">GitHub</a>
                    ) : project.loomEmbed ? (
                        <button className="btn btn-outline" onClick={() => openVideoModal(project.loomEmbed)}>
                            <i className="fab fa-youtube"></i> Watch Video
                        </button>
                    ) : (
                        <span className="loom-badge">Private Repository</span>
                    )}
                </div>

                {project.loomEmbed && (
                    <div className="loom-badge">Private Code - Video Demo Available</div>
                )}
            </div>
        </div>
    );
}
