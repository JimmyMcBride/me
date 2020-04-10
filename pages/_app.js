import App from "next/app";
import Head from "next/head";
import { AppWrapper, theme } from "bushido-strap";
import "./styles.css";
import "bushido-strap/css/main.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      // <AppWrapper className="app" bgSrc="/blog-bg.jpg">
      <AppWrapper className="app" bg={theme.gray5}>
        <Head>
          <title>TypeScript/Next/GraphQL</title>
        </Head>
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}

export default MyApp;
