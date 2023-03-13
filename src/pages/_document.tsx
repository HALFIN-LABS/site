import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
            sizes="72x72"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#262626" />
          <meta name="msapplication-TileImage" content="https://cdn.discordapp.com/attachments/1072253496411303997/1084899328264519710/Group_2635.png" />
          <meta name="theme-color" content="#D79921" />
          <meta name="description" content="mynostr.id | halfin labs" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
