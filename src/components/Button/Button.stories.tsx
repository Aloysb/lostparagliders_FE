import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary: React.FC<{}> = () => <Button variant='primary'></Button>;
export const Warning: React.FC<{}> = () => <Button variant='warning'></Button>;
export const Success: React.FC<{}> = () => <Button variant='success'></Button>;
export const Info: React.FC<{}> = () => <Button variant='info'></Button>;
export const Disabled: React.FC<{}> = () => (
  <Button variant='disabled'></Button>
);
export const Example: React.FC<{}> = () => (
  <Button variant='warning' title="I'm buying equipment"></Button>
);
