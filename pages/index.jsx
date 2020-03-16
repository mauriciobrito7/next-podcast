// it will give us support for using fecth on node
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
export default class extends React.Component {
  // Only works on next js
  static async getInitialProps() {
    // some functions that are on browser aren't exist on node js
    let req = await fetch("https://api.audioboom.com/channels/recommended");
    let { body: channels } = await req.json();
    return { channels };
  }

  render() {
    const { channels } = this.props;
    return (
      <React.Fragment>
        <Layout title="Podcasts">
          <ChannelGrid channels={channels}></ChannelGrid>
        </Layout>
      </React.Fragment>
    );
  }
}
