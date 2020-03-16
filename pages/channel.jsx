import "isomorphic-fetch";
export default class extends React.Component {
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
  render() {
    const { channel, audioClips, series } = this.props;
    return (
      <React.Fragment>
        <h1>{channel.title}</h1>

        <h2>Ultimos Podcasts</h2>
        {audioClips.map(clip => (
          <div className="audio">{clip.title}</div>
        ))}

        <h2>Series</h2>
        {series.map(serie => (
          <div className="series">{serie.title}</div>
        ))}
      </React.Fragment>
    );
  }
}
