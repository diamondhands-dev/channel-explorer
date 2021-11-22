import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from 'next/image';

import logo from '../../../public/icons/dh-logo.svg';
import { LocaleSwitcher } from '../LocaleSwitcher';

import { HeaderContainer, Left, Right, Title, ProvideBy, Logo, Atag } from './styles';

export const Header = () => {
  const { push, asPath, locales } = useRouter();
  const { locale } = useIntl();
  const changeLocale = useCallback(
    (locale: string) => push(asPath, null, { locale }),
    [push, asPath],
  );

  const left = (
    <Left>
      <Title>
        <FormattedMessage id="header.channel-explorer" />
      </Title>
      <ProvideBy>
        <span>by</span>
        <Atag href="https://www.diamondhandsnode.com/en" rel="noopener noreferrer" target="_blank">
          Diamond Hands
        </Atag>
        <Logo>
          <Image src={logo} alt="logo" />
        </Logo>
      </ProvideBy>
    </Left>
  );

  const right = (
    <>
      <Right>
        <LocaleSwitcher locale={locale} locales={locales} onChange={changeLocale} />
      </Right>
    </>
  );

  return (
    <HeaderContainer>
      {left}
      {right}
    </HeaderContainer>
  );
};
