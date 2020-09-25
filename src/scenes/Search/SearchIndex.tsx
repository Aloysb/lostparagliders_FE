import React from 'react';

//Components
import Button from '../../components/Button/Button';
import SearchInput from '../../components/SearchInput/SearchInput';

import Logo from '../../assets/logo/Logo.png';

const Search = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-4/5'>
        <img className='h-40 mx-auto' alt='Website logo' src={Logo} />
        <h1 className='display text-center my-5'>
          Has this equipment been stolen?
        </h1>
        <h3 className='text-center my-3'>
          Enter the serial number below to find out!
        </h3>
        <SearchInput />
        <Button variant='warning' title='Search' />
      </div>
    </div>
  );
};

export default Search;
