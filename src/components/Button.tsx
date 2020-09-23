import React from 'react';
import styled from 'styled-components';
//This is necessary to use tailwind with Styled components.
import tw from 'tailwind.macro';

//Interface for the styled component.

interface StyledButton {
  variant?: string;
}

//Styled component.
const StyledButton = styled.button<StyledButton>`
  background: ${(props) => props.variant};
  color: white;
  background-color: ${(props) =>
    props.variant === 'primary' ? 'purple' : 'red'};
  letter-spacing: 120%;
  border: none;
  ${tw`
  text-base
  px-8
  py-2
  rounded
  uppercase
  my-2
  mx-2
  `};
`;

interface ButtonProps {
  title?: string;
  variant?: string;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton variant={props.variant}>{props.title}</StyledButton>;
};

Button.defaultProps = {
  title: 'Button',
};

export default Button;
