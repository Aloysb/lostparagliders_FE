import React from 'react';

interface DescriptionTableProps {
  match?: {
    brand: string;
    model: string;
    colors: [string];
    description: string;
    stolenAt: string;
  };
}

const DescriptionTable = ({ match }: DescriptionTableProps) => {
  return <div>Hello Wolrd</div>;
};

const exampleMatch = {
  brand: 'Advance',
  model: 'Progress',
  colors: ['red', 'black'],
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo quasi doloremque alias voluptatum. Officia aut temporibus exercitationem, in explicabo expedita doloribus modi distinctio unde numquam, ut quo fuga eveniet!',
  stolenAt: '31 December at Lennox Head, Australia.',
};

DescriptionTable.defaultProps = exampleMatch;

export default DescriptionTable;
