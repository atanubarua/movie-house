export default function TrailerModal({ youtubeId, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl mx-4 aspect-video bg-black">

        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
