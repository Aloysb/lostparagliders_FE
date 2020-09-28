import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import DescriptionTable from './DescriptionTable';

export default {
  title: 'Components/DescriptionTable',
  component: DescriptionTable,
} as Meta;

export const Default: React.FC<{}> = () => <DescriptionTable />;
