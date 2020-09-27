import React, { useEffect } from 'react';

import Logo from '../../assets/logo/Logo.png';

import { Link, useLocation } from 'react-router-dom';

//TS type definition for the props.
interface CenterContainerProps {
  children?: React.ReactNode;
  logo?: boolean;
}

const CenterContainer = (props: CenterContainerProps) => {
  //Get location to display or not the button back home.
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
  });

  return (
    <div className='min-h-screen flex flex-col'>
      {location.pathname !== '/' ? (
        <div className='absolute self-start mt-8 ml-8 text-white'>
          <Link
            className='flex hover:font-weight-bold p-2 border-solid border-2 border-white rounded hover:text-blue-800 hover:border-blue-800 hover:bg-blue-100'
            to='/'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='feather feather-skip-back mr-2'
            >
              <polygon points='19 20 9 12 19 4 19 20'></polygon>
              <line x1='5' y1='19' x2='5' y2='5'></line>
            </svg>
            Back home
          </Link>
        </div>
      ) : (
        ''
      )}
      {props.logo === true && (
        <div className='mx-auto pt-24'>
          <img className='h-40 mx-auto' alt='Website logo' src={Logo} />
        </div>
      )}
      {props.logo === true || <div className='pt-24'></div>}
      <div className='flex-grow flex justify-center'>
        <div className='w-4/5 flex flex-col items-center justify-start'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

CenterContainer.defaultProps = {
  logo: true,
};

export default CenterContainer;
