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
      <div className='flex flex-col content-center py-3 my-3'>
        <SearchInput />
        <div className='self-center my-3'>
          <Button variant='warning' title='Search' />
        </div>
      </div>
    </CenterContainer>
  );
};

export default Search;
