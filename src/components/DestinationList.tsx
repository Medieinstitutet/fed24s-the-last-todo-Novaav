
import React from 'react';
import DestinationItem from './DestinationItem';

interface Destination {
  id: number;
  name: string;
  description: string;
  visited: boolean;
}

interface Props {
  destinations: Destination[];
  moveDestination: (dragIndex: number, hoverIndex: number) => void;
  handleToggleVisited: (id: number) => void;
}

const DestinationList: React.FC<Props> = ({
  destinations,
  moveDestination,
  handleToggleVisited
}) => {
  return (
    <div className="destination-lists">
      <div className="destination-column">
        <h2>Ej besökta resmål:</h2>
        <ul>
          {destinations.filter(dest => !dest.visited).map((dest, index) => (
            <DestinationItem 
              key={dest.id} 
              destination={dest} 
              index={index} 
              moveDestination={moveDestination}
              handleToggleVisited={handleToggleVisited}
            />
          ))}
        </ul>
      </div>

      <div className="destination-column">
        <h2>Besökta resmål:</h2>
        <ul>
          {destinations.filter(dest => dest.visited).map((dest, index) => (
            <DestinationItem 
              key={dest.id} 
              destination={dest} 
              index={index} 
              moveDestination={moveDestination}
              handleToggleVisited={handleToggleVisited}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DestinationList;
