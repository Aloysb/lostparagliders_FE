import React from 'react';

import Logo from '../../assets/logo/Logo.png';

//TS type definition for the props.
interface ChildrenProps {
  children?: React.ReactNode;
}

const CenterContainer = (props: ChildrenProps) => {
  return (
    <div className='flex justify-center items-center w-screen min-h-screen'>
      <div className='w-4/5'>
        <img className='h-40 mx-auto' alt='Website logo' src={Logo} />
        {props.children}
      </div>
    </div>
  );
};

export default CenterContainer;
