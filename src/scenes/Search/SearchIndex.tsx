import React, { useState } from 'react';

//Containers
import CenterContainer from '../../components/CenterContainer/CenterContainer';

//Components
import Button from '../../components/Button/Button';
import SearchInput from '../../components/SearchInput/SearchInput';

const Search = () => {
  //Hook for loading state
  const [isLoading, setLoading] = useState(false);

  const searchDatabaseWithInput = () => {
    setLoading(true);
  };

  return (
    <CenterContainer>
      <h1 className='display text-center my-5'>
        {!isLoading
          ? 'Has this equipment been stolen?'
          : "We're checking the database"}
      </h1>
      <h3 className='text-center my-3'>
        {!isLoading
          ? 'Enter the serial number below to find out!'
          : 'Please wait'}
      </h3>
      <div className='flex flex-col content-center py-3 my-3'>
        <SearchInput />
        <div className='self-center my-3'>
          <Button
            variant='warning'
            title='Search'
            onClick={searchDatabaseWithInput}
          />
        </div>
      </div>
    </CenterContainer>
  );
};

export default Search;
