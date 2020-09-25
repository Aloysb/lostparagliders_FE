import React from 'react';
//Global style for styled components.
import GlobalStyle from '../src/style/styled_components/globalStyle';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
