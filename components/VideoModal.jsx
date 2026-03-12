function VideoModal({ isOpen, videoEmbed, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={`video-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <button className="close-modal" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                <h3>Project Demonstration</h3>
                <div style={{ padding: '10px 0' }}>
                    <div dangerouslySetInnerHTML={{ __html: videoEmbed }} />
                </div>
            </div>
        </div>
    );
}