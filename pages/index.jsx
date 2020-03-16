// it will give us support for using fecth on node
import "isomorphic-fetch";
import Link from "next/link";

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
        <header>Podcast</header>
        <div className="channels">
          {channels.map(channel => (
            <Link key={channel.id} href={`/channel?id=${channel.id}`}>
              <a className="channel">
                <img src={channel.urls.logo_image.original} alt="channel" />
                <h2>{channel.title}</h2>
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
          header {
            color: white;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5em;
          }
          .channel img {
            width: 100%;
          }
        `}</style>
        <style jsx global>
          {`
            body {
              margin: 0;
              font-family: system-ui;
              background: white;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
