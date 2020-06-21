import React from "react";
import App from "next/app";
import { AppWrapper, theme } from "sriracha-ui";
import "./styles.css";
import "sriracha-ui/css/main.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppWrapper className="app" bg={theme.colors.gray3}>
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}

export default MyApp;
