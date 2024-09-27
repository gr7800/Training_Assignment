const VideoPlayerPopup = ({ videoSrc, isOpen, onClose }) => {

  const youtubeEmbedUrl = videoSrc.replace("watch?v=", "embed/");

  return (
    <div
      className={`videoPopup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
        isOpen ? "visible" : "invisible opacity-0"
      }`}
    >
      <div className="opacityLayer absolute inset-0" onClick={onClose}></div>
      <div className="videoPlayer bg-white p-4 rounded shadow-lg relative z-10 w-11/12 max-w-2xl">
        <span
          className="closeBtn cursor-pointer text-red-500"
          onClick={onClose}
        >
          Close
        </span>
        <div className="videoContainer mt-2">
          <iframe
            className="w-full h-64"
            src={youtubeEmbedUrl}
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPopup;
