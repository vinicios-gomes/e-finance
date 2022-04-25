import Document, { Html, Head, Main, NextScript } from 'next/document';
import projectConfig from '../../package.json';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <meta itemProp="name" content={projectConfig.name} />
          <meta itemProp="description" content={projectConfig.description} />
          <meta
            itemProp="image"
            content="https://nextjs-boilerplate.vercel.app/static/images/nextjs-boilerplate.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
