import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface StyledButton {
  bgColor?: string;
}

const Button = styled.button<StyledButton>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  box-shadow: box-shadow;
  border-radius: 3px;
  ${tw`px-64
  shadow
  font-mono
  `}
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
