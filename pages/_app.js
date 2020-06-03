import App from "next/app";
import { AppWrapper, theme } from "sriracha-ui";
import "./styles.css";
import "sriracha-ui/css/main.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <body>
          <AppWrapper className="app" bg={theme.gray5}>
            <Component {...pageProps} />
          </AppWrapper>
        </body>
      </>
    );
  }
}

export default MyApp;
