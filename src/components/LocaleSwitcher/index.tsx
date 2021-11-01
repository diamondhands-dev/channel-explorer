import { Dropdown } from 'comet-ui-kit';
import React, { useMemo } from 'react';

import { theme } from '../../modules/styles';

import { getLanguageName } from './getLanguageName';
import { Container, CustomDropDown, TextChosenLanguage } from './styled';

type Props = { locale: string; locales: string[]; onChange?: (locale: string) => void };

export const LocaleSwitcher = ({ locale, locales: localesParam, onChange }: Props) => {
  const locales = useMemo(
    () =>
      [...localesParam].sort((a, b) => {
        if (a === 'en') return -1;
        if (b === 'en') return 1;
        return getLanguageName(a).localeCompare(getLanguageName(b));
      }),
    [localesParam],
  );

  return (
    <Container>
      <CustomDropDown
        target={
          <Dropdown.DefaultTarget color={theme.colors.orange} size="city">
            <TextChosenLanguage>{getLanguageName(locale)}</TextChosenLanguage>
          </Dropdown.DefaultTarget>
        }
      >
        {locales.map((it) => (
          <Dropdown.Item
            color={theme.colors.orange}
            selectedColor={theme.colors.orange}
            selected={locale === it}
            onClick={() => onChange?.(it)}
            key={it}
          >
            {getLanguageName(it)}
          </Dropdown.Item>
        ))}
      </CustomDropDown>
    </Container>
  );
};
