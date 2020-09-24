import React from 'react';

//Components
import Button from '../../components/Button/Button';
import SearchInput from '../../components/SearchInput/SearchInput';

const LookUp = () => {
  return (
    <div>
      <SearchInput />
      <Button variant='warning' title='Search' />
    </div>
  );
};
