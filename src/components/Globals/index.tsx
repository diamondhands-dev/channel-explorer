import {
  CometGlobalStyles,
  CometThemeProvider,
  CometToastContainer,
  COMET_GLOBAL_FONT_HREF,
} from 'comet-ui-kit';
import Head from 'next/head';
import React from 'react';
import GithubCorner from 'react-github-corner';

import { GITHUB_REPO_URL } from '../../modules/env';
import { useThemeSettings } from '../../modules/store/settings';
import { Header } from '../Header';

import { GlobalContainer } from './styled';

export const Globals = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useThemeSettings();
  const bannerColor = theme === 'dark' ? '#fff' : '#151513';
  const octColor = theme === 'dark' ? '#151513' : '#fff';

  return (
    <CometThemeProvider theme={theme as any}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DH Channel Explorer</title>
        <link rel="stylesheet" href={COMET_GLOBAL_FONT_HREF} />
        <link
          rel="icon"
          href={
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/high-voltage_26a1.png'
          }
        />
      </Head>
      <CometGlobalStyles />
      <Header />
      <GithubCorner
        direction="left"
        href={GITHUB_REPO_URL}
        bannerColor={bannerColor}
        octoColor={octColor}
        rel="noopener noreferrer"
        target="_blank"
      />
      <GlobalContainer>{children}</GlobalContainer>
      <CometToastContainer />
    </CometThemeProvider>
  );
};
