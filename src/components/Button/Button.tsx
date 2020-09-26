import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

//This is necessary to use tailwind with Styled components.
import tw from 'tailwind.macro';
//Spinners
import { Ellipsis } from 'react-spinners-css';

//Styled component.
const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3rem;

  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 600;

  color: rgba(255, 255, 255, 0.9);
  background-color: ${(props) => `var(--${props.variant})`};
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06),
    0 1px 2px 0 ${(props) => `var(--${props.variant})`};
  transition: 0.3s all linear;

  ${tw`
  uppercase
  px-8
  rounded
  my-2
  mx-2
  `};

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }

  &:focus {
    opacity: 1;
    outline: none;
    animation-name: click-animation;
    animation-duration: 1s;
  }

  @keyframes click-animation {
    0% {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06),
        0 1px 2px 0 ${(props) => `var(--${props.variant})`};
    }
    50% {
      box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 1);
    }
    100% {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06),
        0 1px 2px 0 ${(props) => `var(--${props.variant})`};
    }
  }
`;

//TS type definition for the props.
interface ButtonProps {
  title?: string;
  variant?: string;
  path?: string;
  action?: any;
}

// Component
export const Button = (props: ButtonProps) => {
  //Hook for loading state
  const [loading, setLoading] = useState(false);

  //Hook for navigation
  let history = useHistory();

  const handleClick = () => {
    displayLoadingSpinner();
    //If route, go to this route.
    if (props.path !== '') history.push(`${props.path}`);
    //If action, perform action.
    if (props.action) props.action();
  };

  const displayLoadingSpinner = () => {
    setLoading(true);
  };

  return (
    <StyledButton variant={props.variant} onClick={handleClick}>
      {loading ? <Ellipsis size={30} color='#fff' /> : props.title}
    </StyledButton>
  );
};

// Default props for the component
Button.defaultProps = {
  title: 'Button',
  variant: 'Primary',
  path: '',
  action: '',
};

export default Button;
