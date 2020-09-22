import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.title}</StyledButton>;
};

export default Button;
