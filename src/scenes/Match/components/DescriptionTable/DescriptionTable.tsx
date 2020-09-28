import React from 'react';

interface DescriptionTableProps {
  match: {
    brand: string;
    model: string;
    colors: string;
    description: string;
    stolenAt: string;
  };
}

const DescriptionTable = ({ match }: DescriptionTableProps) => {
  return (
    <div className='table w-full text-white '>
      {Object.entries(match).map(([label, value], idx) => {
        return (
          <div key={idx} className='table-row'>
            <div className='table-cell p-2 font-bold text-right'>{label}</div>
            <div className='table-cell p-2'>{value}</div>
          </div>
        );
      })}
    </div>
  );
};

const exampleMatch = {
  brand: 'Advance',
  model: 'Progress',
  colors: 'red, black',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo quasi doloremque alias voluptatum. Officia aut temporibus exercitationem, in explicabo expedita doloribus modi distinctio unde numquam, ut quo fuga eveniet!',
  stolenAt: '31 December at Lennox Head, Australia.',
};

DescriptionTable.defaultProps = { match: exampleMatch };

export default DescriptionTable;
