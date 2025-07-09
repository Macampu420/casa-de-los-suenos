import React, { useState } from 'react';
import type { House } from './houses.types';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import { houses } from './houses.data';

const HousesTabs: React.FC = () => {
  // State to manage the selected house
  const [selectedHouse, setSelectedHouse] = useState<House>(houses[0]);

  const handleHouseSelect = (house: House) => {
    setSelectedHouse(house);
  };

  return (
    <section id='casas' className="w-full flex flex-row min-h-[700px]">
      <TabContent selectedHouse={selectedHouse} />
      <TabHeader 
        houses={houses}
        selectedHouse={selectedHouse}
        onHouseSelect={handleHouseSelect}
      />
    </section>
  );
};

export default HousesTabs; 