import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Link href="/">
          <a>Podcast</a>
        </Link>
      </header>
      {children}
      <style jsx>{`
        header {
          color: white;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }
        header a {
          color: white;
          text-decoration: none;
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
    </div>
  );
};

export default Layout;
