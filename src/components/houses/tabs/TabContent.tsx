import React from 'react';
import type { House } from './houses.types';

interface TabContentProps {
  selectedHouse: House;
}

const TabContent: React.FC<TabContentProps> = ({ selectedHouse }) => {
  return (
    <div
      className="w-full p-6 border-[20px_20px_20px_0px] border-solid rounded-[0px_20px_20px_0px] flex flex-col gap-4"
      style={{ borderColor: selectedHouse.colorPrimary }}
    >
      <h2
        className="text-2xl font-bold"
        style={{ color: selectedHouse.colorPrimary }}
      >
        {selectedHouse.name}
      </h2>
      <p
        className="text-xl"
        style={{ color: selectedHouse.colorSecondary }}
      >
        {selectedHouse.description}
      </p>
      
      {/* House image */}
      <div className="mt-4">
        <img
          src={selectedHouse.img}
          alt={selectedHouse.name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default TabContent; 