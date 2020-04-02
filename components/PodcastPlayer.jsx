import Link from "next/link";
function PodcastPlayer({ clip, onClose }) {
  console.log(clip);
  return (
    <div className="clip">
      <nav>
        {onClose ? (
          <a onClick={onClose}>&lt; Volver </a>
        ) : (
          <Link href={`/channel?id=${clip.channel.id}`}>
            <a className="close">&lt; Volver</a>
          </Link>
        )}
      </nav>

      <picture>
        <div
          style={{
            backgroundImage: `url(${clip.urls.image ||
              clip.channel.urls.logo_image.original})`
          }}
        />
      </picture>

      <div className="player">
        <h3>{clip.title}</h3>
        <h6>{clip.channel.title}</h6>
        <audio controls autoPlay>
          <source src={clip.urls.high_mp3} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default PodcastPlayer;
