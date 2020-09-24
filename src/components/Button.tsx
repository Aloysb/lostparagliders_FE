import React from 'react';
import styled from 'styled-components';
//This is necessary to use tailwind with Styled components.
import tw from 'tailwind.macro';

//Styled component.
const StyledButton = styled.button<ButtonProps>`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  font-family: mulish;
  background: ${(props) => props.variant};
  color: white;
  background-color: ${(props) =>
    props.variant === 'primary' ? 'var(--success)' : 'red'};
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

//TS type definition for the props.
interface ButtonProps {
  title?: string;
  variant?: string;
}

// Component itself
export const Button = (props: ButtonProps) => {
  return <StyledButton variant={props.variant}>{props.title}</StyledButton>;
};

// Default props for the component
Button.defaultProps = {
  title: 'Button',
  variant: 'Primary',
};

export default Button;
