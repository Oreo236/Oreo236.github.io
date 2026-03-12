function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <p>I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    <p>Feel free to reach out to me through any of the platforms below:</p>
                    <div className="social-links" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
                        <a href="https://github.com/Oreo236" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/oreoluwa-adeniyi-a43087238/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:oaa42@cornell.edu" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}