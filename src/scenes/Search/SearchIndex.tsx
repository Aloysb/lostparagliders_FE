import React from 'react';

//Containers
import CenterContainer from '../../components/CenterContainer/CenterContainer';

//Components
import Button from '../../components/Button/Button';
import SearchInput from '../../components/SearchInput/SearchInput';

const Search = () => {
  return (
    <CenterContainer>
      <h1 className='display text-center my-5'>
        Has this equipment been stolen?
      </h1>
      <h3 className='text-center my-3'>
        Enter the serial number below to find out!
      </h3>
      <SearchInput />
      <Button variant='warning' title='Search' />
    </CenterContainer>
  );
};

export default Search;
