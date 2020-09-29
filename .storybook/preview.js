import React from 'react';
//Global style for styled components.
import GlobalStyle from '../src/style/styled_components/globalStyle';

export const decorators = [
  (Story) => (
    <div style={{height: 100vh}} >
      <GlobalStyle />
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
