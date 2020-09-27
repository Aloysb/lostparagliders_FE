import React from 'react';

import { useLocation } from 'react-router-dom';

//Components
import Button from '../../components/Button/Button';
import CenterContainer from '../../components/CenterContainer/CenterContainer';

const NoMatchPage = () => {
  //Get data from last page
  const location = useLocation();
  const serialNumber: any = location.state;

  return (
    <CenterContainer>
      <h1 className='display text-center my-5'>
        No match found for your request! That's good news!
      </h1>
      <h3 className='text-center mb-12'>{serialNumber}</h3>
      <Button variant='success' goToRoute='/' title='Back home' />
    </CenterContainer>
  );
};

export default NoMatchPage;
