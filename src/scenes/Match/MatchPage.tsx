import React from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../components/Button/Button';
import CenterContainer from '../../components/CenterContainer/CenterContainer';

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
        <div className='table w-full text-white '>
          <div className='table-row'>
            <div className='table-cell p-2 font-bold text-right'>Brand</div>
            <div className='table-cell p-2'>Advance</div>
          </div>
          <div className='table-row'>
            <div className='table-cell p-2 font-bold text-right'>Model</div>
            <div className='table-cell p-2'>Progress</div>
          </div>
          <div className='table-row'>
            <div className='table-cell p-2 font-bold text-right'>Colors</div>
            <div className='table-cell p-2'>Black, Red</div>
          </div>
          <div className='table-row'>
            <div className='table-cell p-2 font-bold text-right'>
              Description
            </div>
            <div className='table-cell p-2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              expedita praesentium sit dolor cumque consequuntur quibusdam magni
              iure corrupti, fugiat porro placeat eligendi in! Veritatis
              quisquam aspernatur eos facilis incidunt.
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell p-2 font-bold text-right'>
              Stolen the
            </div>
            <div className='table-cell p-2'>
              31 December 2018 at Lennox Head, Australia
            </div>
          </div>
        </div>
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
