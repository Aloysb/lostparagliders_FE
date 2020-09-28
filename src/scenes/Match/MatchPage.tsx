import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../components/Button/Button';
import CenterContainer from '../../components/CenterContainer/CenterContainer';
import DescriptionTable from './components/DescriptionTable/DescriptionTable';

const MatchPage = () => {
  //Get data from last page
  const location = useLocation();
  const serialNumber: any = location.state;

  const [isMatching, setIsMatching] = useState(false);

  return (
    <CenterContainer logo={false}>
      <h1 className='pt-12'>
        It looks like this equipment might have been stolen...
      </h1>
      {!isMatching ? (
        <div className='flex flex-col justify-around items-center'>
          <h3 className='mt-4 text-red-600'>
            A user has registered this equipment as stolen. Don't panic.
          </h3>
          <h2 className='my-2'>
            Does the equipment match the description below?
          </h2>
          <div className='w-2/3 mx-auto flex-grow flex justify-stretch items-start'>
            <DescriptionTable />
          </div>
          <div className=' self-center flex justify-around'>
            <Button
              variant='warning'
              title="No, the item doesn't match."
              goToRoute='/notmatching'
            ></Button>
            <Button
              actionOnClick={() => setIsMatching(true)}
              variant='success'
              title='Yes, the item does match.'
            ></Button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-around items-center'>
          <h3 className='mt-4 text-red-600'>
            A user has registered this equipment as stolen. Don't panic.
          </h3>
          <h2 className='my-2'>What to do now?</h2>
          <div className='w-2/3 my-8 mx-auto flex-grow text-white border-white border-2 border-solid rounded px-8 py-4'>
            <p className='py-3'>
              In order to protect our users privacy, we will need your contact
              details.
            </p>
            <p className='py-3'>
              We won’t use your contact details and you can remain anonymous if
              you wish. The person that has registered this gear as stolen will
              be alerted and you will receive his/her contact details through
              email.
            </p>
            <p className='py-3'>
              Feel free to contact him to verify if the equipment has been
              stolen or not. You will receive a second email after 48 hours to
              get an update on the enquiry, letting us know if we should keep
              this equipment tagged as stolen or not. Together, let’s fight
              against thieves !
            </p>
          </div>
          <div className=' self-center flex justify-around'>
            <Button variant='success' title="Ok, let's do this!"></Button>
          </div>
        </div>
      )}
    </CenterContainer>
  );
};

export default MatchPage;
