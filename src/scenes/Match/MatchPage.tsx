import React from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../components/Button/Button';
import CenterContainer from '../../components/CenterContainer/CenterContainer';
import DescriptionTable from './components/DescriptionTable/DescriptionTable';

const MatchPage = () => {
  //Get data from last page
  const location = useLocation();
  const serialNumber: any = location.state;

  return (
    <CenterContainer logo={false}>
      <div className='flex flex-col items-start'>
        <h2 className='my-3'>
          It looks like this equipment might have been stolen...
        </h2>
        <h3 className='self-center'>{serialNumber}</h3>
        <h3 className='mt-4 text-red-600'>
          A user has registered this equipment as stolen. Don't panic.
        </h3>
        <h2>Does the equipment match the description below?</h2>
      </div>
      <div className='w-2/3 mx-auto flex-grow flex justify-stretch items-start'>
        <DescriptionTable />
      </div>
      <div className='py-8 self-center flex justify-around'>
        <Button
          variant='warning'
          title="No, the item doesn't match."
          goToRoute='/notmatching'
        ></Button>
        <Button variant='success' title='Yes, the item does match.'></Button>
      </div>
    </CenterContainer>
  );
};

export default MatchPage;
