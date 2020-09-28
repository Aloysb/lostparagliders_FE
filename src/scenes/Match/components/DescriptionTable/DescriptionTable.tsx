import React from 'react';

interface IMatchEquipment {
  match: {
    serialNumber: string;
    brand: string;
    model: string;
    colors: string;
    description: string;
    stolen: string;
  };
}

const DescriptionTable = ({ match }: IMatchEquipment) => {
  return (
    <div className='text-white rounded border-2 border-white border-solid px-4 pb-4 my-4 divide-y'>
      <h3 className=' py-4 flex justify-center items-center'>
        {match.serialNumber}
      </h3>
      <div className='table w-full'>
        {Object.entries(match).map(([label, value], idx) => {
          return (
            <div key={idx} className='table-row'>
              <div className='table-cell p-2 font-bold text-right'>{label}</div>
              <div className='table-cell p-2'>{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const exampleMatch = {
  serialNumber: '123-ABCDE-Test',
  brand: 'Advance',
  model: 'Progress',
  colors: 'red, black',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo quasi doloremque alias voluptatum. Officia aut temporibus exercitationem, in explicabo expedita doloribus modi distinctio unde numquam, ut quo fuga eveniet!',
  stolen: '31 December at Lennox Head, Australia.',
};

DescriptionTable.defaultProps = {
  match: exampleMatch,
  serialNumber: 'Serial Number here.',
};

export default DescriptionTable;
