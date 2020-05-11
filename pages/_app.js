import App from "next/app";
import Head from "next/head";
import { AppWrapper, theme } from "bushido-strap";
import "./styles.css";
import "bushido-strap/css/main.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head></Head>
        <body>
          <AppWrapper className="app" bg={theme.gray5}>
            <Component {...pageProps} />
          </AppWrapper>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js"></script>
        </body>
      </>
    );
  }
}

export default MyApp;
