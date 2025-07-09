import React from 'react';
import type { House } from './houses.types';

interface TabHeaderProps {
  houses: House[];
  selectedHouse: House;
  onHouseSelect: (house: House) => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({ houses, selectedHouse, onHouseSelect }) => {
  return (
    <div className="flex flex-col gap-4 w-2/3 p-4 justify-center items-center">
      {/* Tab buttons */}
      <div className="flex flex-col gap-2">
        {houses.map((house) => (
          <button
            key={house.id}
            onClick={() => onHouseSelect(house)}
            className={`p-4 rounded-lg transition-all duration-200 flex justify-center items-center ${
              selectedHouse.id === house.id
                ? 'shadow-lg transform scale-105'
                : 'hover:bg-gray-100'
            }`}
            style={{
              backgroundColor: selectedHouse.id === house.id ? house.colorPrimary + '20' : 'transparent',
              border: selectedHouse.id === house.id ? `2px solid ${house.colorPrimary}` : '2px solid transparent'
            }}
          >
            <img
              src={house.icon}
              alt={`${house.name} icon`}
              className="w-12 h-12"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabHeader; 