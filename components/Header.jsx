function Header() {
    return (
        <header>
            <div className="container">
                <div className="profile-header">
                    <img src="IMG_7170_Original.jpg" alt="Profile" className="profile-img" />
                    <h1>Oreoluwa Adeniyi</h1>
                    <p className="tagline">Aspiring Software Engineer | Passionate about creating beautiful and functional systems</p>
                    <div className="social-links">
                        <a href="https://github.com/Oreo236" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/oreoluwa-adeniyi-a43087238/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:oaa42@cornell.edu" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </header>
    );
}