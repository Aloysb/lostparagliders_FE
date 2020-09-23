import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary: React.SFC<{}> = () => <Button variant='primary'></Button>;

export const Warning: React.SFC<{}> = () => <Button variant='warning'></Button>;
