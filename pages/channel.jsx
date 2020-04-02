import "isomorphic-fetch";
// components
import Layout from "../components/Layout";
import PodcastList from "../components/PodcastList";
import PodcastPlayer from "../components/PodcastPlayer";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openPodcast: null };
  }

  static async getInitialProps({ query: { id } }) {
    // run in parallel
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${id}`),
      fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${id}/audio_clips`)
    ]);
    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;

    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;

    return { channel, audioClips, series };
  }

  openPodcast = (event, podcast) => {
    event.preventDefault();
    this.setState({
      openPodcast: podcast
    });
  };

  closePodcast = event => {
    event.preventDefault();
    this.setState({
      openPodcast: null
    });
  };

  render() {
    const { channel, audioClips, series } = this.props;
    const { openPodcast } = this.state;
    console.log(channel);

    return (
      <Layout title={channel.title}>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${channel.urls.banner_image.original ||
              "https://www.podigee.com/images/homepage_banner.jpg"})`,
            backgroundSize: "cover"
          }}
        />

        {openPodcast && (
          <div className="modal">
            <PodcastPlayer clip={openPodcast} onClose={this.closePodcast} />
          </div>
        )}

        <h1>{channel.title}</h1>

        <h2>Ultimos Podcasts</h2>
        <PodcastList podcasts={audioClips} onclickPodcast={this.openPodcast} />

        <h2>Series</h2>
        {series.map(serie => (
          <div key={serie.id} className="series">
            {serie.title}
          </div>
        ))}
        <style jsx>{`
          .banner {
            width: 100%;
            height: 200px;
          }
          .modal {
            position: fixed;

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
          }
        `}</style>
      </Layout>
    );
  }
}
