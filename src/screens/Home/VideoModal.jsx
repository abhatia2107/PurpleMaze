import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoModal = ({ videoUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className={showModal ? 'modal active' : 'modal'}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content">
          <ReactPlayer url={videoUrl} controls={true} />
          
        </div>
        <button className="modal-close" onClick={closeModal}></button>
      </div>
      <img onClick={openModal}
                  className="vuesax-bulk-play"
                  alt="Vuesax bulk play"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-play-circle.svg"
                />
    </div>
  );
};

export default VideoModal;
