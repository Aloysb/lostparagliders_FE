import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import DescriptionTable from './DescriptionTable';

export default {
  title: 'Components/DescriptionTable',
  component: DescriptionTable,
} as Meta;

const exampleMatch = {
  brand: 'Advance',
  model: 'Progress',
  colors: 'red, black',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo quasi doloremque alias voluptatum. Officia aut temporibus exercitationem, in explicabo expedita doloribus modi distinctio unde numquam, ut quo fuga eveniet!',
  stolenAt: '31 December at Lennox Head, Australia.',
};

export const Default: React.FC<{}> = () => (
  <DescriptionTable match={exampleMatch} />
);
