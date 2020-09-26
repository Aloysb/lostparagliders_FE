import React from 'react';
import styled from 'styled-components';

const StyleInput = styled.input`
  min-height: 3rem;
  text-align: center;
  font-size: calc(1rem * 4 / 3);
  color: var(--primary);
  flex-grow: 1;
  border-radius: var(--border-radius);
  caret-color: var(--warning);
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;

interface searchInputProps {
  handleChange?: any;
}

const SearchInput = (props: searchInputProps) => {
  return (
    <StyleInput
      type='text'
      placeholder='123-ABC-4D'
      onChange={props.handleChange}
    ></StyleInput>
  );
};

export default SearchInput;
