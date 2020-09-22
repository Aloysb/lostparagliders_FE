import React from 'react';
import styled from 'styled-components';

interface StyledButton {
  bgColor?: string;
}

const Button = styled.button<StyledButton>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  box-shadow: box-shadow;
  border-radius: 3px;
  color: ${(props) => props.bgColor};
`;

interface ButtonProps {
  title?: string;
  bgColor?: string;
}

export const StyledButton = (props: ButtonProps) => {
  return <Button bgColor={props.bgColor}>{props.title}</Button>;
};

export default StyledButton;
