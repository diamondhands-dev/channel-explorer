import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { LocaleSwitcher } from '../LocaleSwitcher';

import { HeaderContainer, Left, Right, Title, TitleSmall } from './styles';

export const Header = () => {
  const { push, asPath, locales } = useRouter();
  const { locale } = useIntl();
  const changeLocale = useCallback(
    (locale: string) => push(asPath, null, { locale }),
    [push, asPath],
  );

  const left = (
    <Left>
      <TitleSmall>
        <FormattedMessage id="header.bitcoin-lightning" />
      </TitleSmall>
      <br />
      <Title>
        <FormattedMessage id="header.channel-explorer" />
      </Title>
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
