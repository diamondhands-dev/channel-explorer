import { CometThemeProvider, COMET_GLOBAL_FONT_HREF } from 'comet-ui-kit';
import Head from 'next/head';
import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import { GlobalStyle } from '../../modules/styles';
import { Header } from '../Header';

import { GlobalContainer } from './styled';

export const Globals = ({ children }: { children: React.ReactNode }) => {
  return (
    <CometThemeProvider theme={'light' as any}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DH Channel Explorer</title>
        <link rel="stylesheet" href={COMET_GLOBAL_FONT_HREF} />

        <link rel="preload" href="/fonts/Raleway/Raleway.ttf" as="font" crossOrigin="" />
        <link
          rel="preload"
          href="/fonts/Raleway/static/Raleway-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Raleway/static/Raleway-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Raleway/static/Raleway-Bold.ttf"
          as="font"
          crossOrigin=""
        />

        <link rel="preload" href="/fonts/Rajdhani/Rajdhani-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Rajdhani/Rajdhani-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Rajdhani/Rajdhani-SemiBold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Rajdhani/Rajdhani-Bold.ttf" as="font" crossOrigin="" />

        <link
          rel="icon"
          href={
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/high-voltage_26a1.png'
          }
        />
      </Head>
      <Header />
      <GlobalContainer>{children}</GlobalContainer>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        transition={Slide}
        draggable
        pauseOnHover
      />
    </CometThemeProvider>
  );
};
