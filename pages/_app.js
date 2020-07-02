import React, { useEffect } from "react";
// import App from "next/app";
import { AppWrapper, theme } from "sriracha-ui";
import "./styles.css";
import "sriracha-ui/css/main.css";

export default function MyApp(props) {
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => (img.loading = "lazy"));
  }, []);

  const { Component, pageProps } = props;

  return (
    <AppWrapper className="app" bg={theme.colors.gray3}>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
