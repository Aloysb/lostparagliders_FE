import React, { useState } from 'react';
import styled from 'styled-components';
//This is necessary to use tailwind with Styled components.
import tw from 'tailwind.macro';
//Spinners
import { Ellipsis } from 'react-spinners-css';

//Styled component.
const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => `var(--${props.variant})`};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06),
    0 1px 2px 0 ${(props) => `var(--${props.variant})`};
  border: none;
  letter-spacing: 0.1rem;
  font-variant: small-caps;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  min-height: 3rem;
  ${tw`
  lowercase
  px-8
  rounded
  my-2
  mx-2
  `};

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
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

  &:focus {
    opacity: 1;
    outline: none;
    animation-name: click-animation;
    animation-duration: 1s;
  }
`;

//TS type definition for the props.
interface ButtonProps {
  title?: string;
  variant?: string;
}

// Component itself
export const Button = (props: ButtonProps) => {
  const [loading, setLoading] = useState(false);

  const displayLoadingSpinner = () => setLoading(true);

  return (
    <StyledButton variant={props.variant} onClick={displayLoadingSpinner}>
      {loading ? <Ellipsis size={30} color='#fff' /> : props.title}
    </StyledButton>
  );
};

// Default props for the component
Button.defaultProps = {
  title: 'Button',
  variant: 'Primary',
};

export default Button;
