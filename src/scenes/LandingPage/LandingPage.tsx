import React from 'react';

//Containers
import CenterContainer from '../../components/CenterContainer/CenterContainer';

//Components
import Button from '../../components/Button/Button';

const LandingPage = () => {
  return (
    <CenterContainer>
      <h1 className='display text-center my-5'>
        Has this equipment been stolen?
      </h1>
      <h3 className='text-center my-3'>
        A website to find out if the paragliding equipment you are buying has
        been stolen or not!
      </h3>
      <div className='flex flex-col justify-stretch w-3/4 mx-auto'>
        <Button title="I'm buying equipment" variant='warning' path='/search' />
        <Button
          title='My equipment has been stolen'
          variant='info'
          path='/register'
        />
      </div>
    </CenterContainer>
  );
};

export default LandingPage;
