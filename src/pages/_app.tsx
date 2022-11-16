import type { AppProps } from "next/app";

import { NextPageWithLayout } from "../types/common.types";

import "../styles/globals.css";
import React from "react";

type Props = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
  const withLayout = Component.getLayout ?? ((page) => page);

  return <>{withLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;