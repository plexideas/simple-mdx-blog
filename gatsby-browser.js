import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/themes/theme';

export const wrapRootElements = ({ element }) => (
  <ThemeProvider theme={theme}>
    { element }
  </ThemeProvider>
);
