import React from 'react';

//Components
import Button from '../../components/Button';

import Logo from '../../assets/logo/Logo.png';

const Home = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-4/5'>
        <img className='h-40 mx-auto' alt='Website logo' src={Logo} />
        <h1 className='display text-center my-5'>
          Has this equipment been stolen?
        </h1>
        <h3 className='text-center my-3'>
          A website to find out if the paragliding equipment you are buying has
          been stolen or not!
        </h3>
        <div className='flex flex-col justify-stretch w-3/4 mx-auto'>
          <Button title="I'm buying equipment" variant='warning' />
          <Button title='My equipment has been stolen' variant='info' />
        </div>
      </div>
    </div>
  );
};

export default Home;
