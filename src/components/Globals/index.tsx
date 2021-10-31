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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani&family=Raleway&display=swap"
          rel="stylesheet"
        />

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
