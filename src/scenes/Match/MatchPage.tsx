import React from 'react';
import { useLocation } from 'react-router-dom';

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
        <h3 className='self-center'>123-ABCDE</h3>
        <h3 className='mt-4 text-red-700'>
          A user has registered this equipment as stolen. Don't panic.
        </h3>
        <h2 className='mt-10 mb-5'>
          Does the equipment match the description below?
        </h2>
      </div>
      <div className='w-100 flex-grow flex justify-stretch items-start'>
        <div className='w-4/5 text-white border-2 border-white border-solid p-10 rounded'>
          <table>
            <tr>
              <td>
                <p>Brand</p>
              </td>
              <td>
                <p>Advance</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Model</p>
              </td>
              <td>
                <p>Progress 3</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Colors</p>
              </td>
              <td>
                <p>Red, Black</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Description</p>
              </td>
              <td>
                <p>Harness from 2018, a few scratches underneath the bum.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Stolen</p>
              </td>
              <td>
                <p>24 December 2018 at Lennox Head</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </CenterContainer>
  );
};

export default MatchPage;
