import React, { useState } from 'react';

//Spinners
import { Ring } from 'react-spinners-css';

import CenterContainer from '../../components/CenterContainer/CenterContainer';
import Button from '../../components/Button/Button';

const MatchRegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <CenterContainer logo={false}>
      <h1 className='pt-12'>
        It looks like this equipment might have been stolen...
      </h1>

      <div className='flex flex-col justify-around items-center'>
        <h3 className='mt-4 text-red-600'>
          A user has registered this equipment as stolen. Don't panic.
        </h3>
        <form className='w-3/5 m-w-20 flex flex-wrap p-8 border-2 border-solid border-white rounded my-auto mt-12'>
          {!isLoading ? (
            <>
              <div className='flex w-full'>
                <input
                  className='text-center m-2 p-2 flex-grow rounded'
                  placeholder='First Name'
                  type='text'
                ></input>
                <input
                  className='text-center m-2 p-2 flex-grow rounded'
                  placeholder='Last Name'
                  type='text'
                ></input>
              </div>
              <input
                className='text-center w-full m-2 p-2 rounded'
                placeholder='email@something.com'
                type='text'
              ></input>
              <input
                className='text-center w-full m-2 p-2 rounded'
                placeholder='+0012 34 5678'
                type='text'
              ></input>
            </>
          ) : (
            <div className='flex w-full justify-center align-center my-4 mx-auto'>
              <Ring size={200} color='#02C19D' />
            </div>
          )}
          <div className='my-6 mx-auto'>
            <Button
              variant='success'
              title='Send me the contact details'
              isLoading={isLoading}
              actionOnClick={() => {
                setIsLoading(true);
              }}
            />
          </div>
        </form>
      </div>
    </CenterContainer>
  );
};

export default MatchRegisterPage;
