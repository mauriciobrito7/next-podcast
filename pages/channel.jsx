export default class extends React.Component {
  static async getInitialProps({ query: { id } }) {
    let reqChannel = await fetch(`https://api.audioboom.com/channels/${id}`);
    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let reqAudio = await fetch(
      `https://api.audioboom.com/channels/${id}/audio_clips`
    );
    let dataAudios = await reqAudio.json();
    let audioClips = dataAudios.body.audio_clips;

    let reqSeries = await fetch(
      `https://api.audioboom.com/channels/${id}/child_channels`
    );
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
