import "isomorphic-fetch";
// components
import Layout from "../components/Layout";
import PodcastList from "../components/PodcastList";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ penPodcast: null });
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

  render() {
    const { channel, audioClips, series } = this.props;
    const openPodcast = this.state;
    return (
      <Layout title={channel.title}>
        {openPodcast && <div>Hay un podcast abierto</div>}

        <h1>{channel.title}</h1>

        <h2>Ultimos Podcasts</h2>
        <PodcastList podcasts={audioClips} onclickPodcast={this.openPodcast} />

        <h2>Series</h2>
        {series.map(serie => (
          <div className="series">{serie.title}</div>
        ))}
      </Layout>
    );
  }
}
