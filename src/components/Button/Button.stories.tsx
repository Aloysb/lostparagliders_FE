import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary: React.SFC<{}> = () => <Button variant='primary'></Button>;
export const Warning: React.SFC<{}> = () => <Button variant='warning'></Button>;
export const Success: React.SFC<{}> = () => <Button variant='success'></Button>;
export const Info: React.SFC<{}> = () => <Button variant='info'></Button>;
export const Disabled: React.SFC<{}> = () => (
  <Button variant='disabled'></Button>
);
export const Example: React.SFC<{}> = () => (
  <Button variant='warning' title="I'm buying equipment"></Button>
);
