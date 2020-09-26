import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import SearchInput from './SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

export const Normal: React.FC<{}> = () => <SearchInput></SearchInput>;
