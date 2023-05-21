import React, { Fragment } from 'react';
import { themeSelector } from '~/core/stores/theme/slectors';
import { ThemeProvider, useSelector } from '~/libs';

type Props = {
  children: React.ReactNode;
};

const ThemeProviderContainer: React.FC<Props> = ({ children }) => {
  const { theme } = useSelector(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
