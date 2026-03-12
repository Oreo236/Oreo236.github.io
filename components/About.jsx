function About({ skills }) {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div>
                        <p>Hello! I am a passionate developer with experience in web development, app development, and creating innovative digital solutions. I love turning complex problems into simple, beautiful solutions.</p>
                        <p>When I am not coding, you can find me baking, reading a book, exploring new technologies, or sharing my knowledge through tutoring.</p>
                        <h3 style={{ marginTop: '1.5rem' }}>My Skills</h3>
                        <div className="skills-container">
                            {skills.map((skill, i) => (
                                <span key={i} className="skill">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}