function App() {
    const [activeTab,   setActiveTab]   = React.useState("all");
    const [searchTerm,  setSearchTerm]  = React.useState("");
    const [activeTags,  setActiveTags]  = React.useState([]);
    const [modalOpen,   setModalOpen]   = React.useState(false);
    const [currentVideo, setCurrentVideo] = React.useState("");

    const toggleTag = tag =>
        setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

    const openVideoModal = embed => { setCurrentVideo(embed); setModalOpen(true); };
    const closeVideoModal = ()   => { setModalOpen(false);    setCurrentVideo(""); };

    return (
        <div>
            <Header />
            <About skills={skillsData} />
            <Projects
                projects={projectsData}
                activeTab={activeTab}    setActiveTab={setActiveTab}
                openVideoModal={openVideoModal}
                searchTerm={searchTerm}  setSearchTerm={setSearchTerm}
                activeTags={activeTags}  toggleTag={toggleTag}
            />
            <Contact />
            <Footer />
            <VideoModal isOpen={modalOpen} videoEmbed={currentVideo} onClose={closeVideoModal} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));