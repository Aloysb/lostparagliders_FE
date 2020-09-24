import React from 'react';

//Components
import Button from '../../components/Button';

const Home = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-4/5'>
        <img className='h-40 w-40 mx-auto bg-blue-900' alt='Website logo' />
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
