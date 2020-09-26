import React from 'react';

import Logo from '../../assets/logo/Logo.png';

//TS type definition for the props.
interface ChildrenProps {
  children?: React.ReactNode;
}

const CenterContainer = (props: ChildrenProps) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='mx-auto pt-24'>
        <img className='h-40 mx-auto' alt='Website logo' src={Logo} />
      </div>
      <div className='flex-grow flex justify-center'>
        <div className='w-4/5 flex flex-col items-center justify-start'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CenterContainer;
