import Link from "next/link";
import slug from "../helpers/slug";

function PodcastList({ podcasts, onclickPodcast }) {
  return (
    <div>
      {podcasts.map(podcast => (
        <a
          href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(
            podcast.title
          )}.${podcast.id}`}
          className="podcast"
          onClick={event => onclickPodcast(event, podcast)}
        >
          <h3>{podcast.title}</h3>
          <div className="meta">{Math.ceil(podcast.duration / 60)} minutes</div>
        </a>
      ))}
    </div>
  );
}

export default PodcastList;
