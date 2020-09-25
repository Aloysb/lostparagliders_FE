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
`;

const SearchInput = () => {
  return <StyleInput type='text' placeholder='123-ABC-4D'></StyleInput>;
};

export default SearchInput;
