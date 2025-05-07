// src/components/DestinationItem.tsx
import React, { forwardRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';


interface Destination {
  id: number;
  name: string;
  description: string;
  visited: boolean;
}

interface Props {
  destination: Destination;
  index: number;
  moveDestination: (dragIndex: number, hoverIndex: number) => void;
  handleToggleVisited: (id: number) => void;
}


const DestinationItem: React.FC<Props> = forwardRef<HTMLLIElement, Props>(
  ({ destination, index, moveDestination, handleToggleVisited }, ref) => {
    const [, drag] = useDrag({
      type: 'DESTINATION',
      item: { index }
    });

    const [, drop] = useDrop({
      accept: 'DESTINATION',
      hover: (item: { index: number }) => {
        if (item.index !== index) {
          moveDestination(item.index, index);
          item.index = index;
        }
      }
    });

    return (
      <li 
        ref={(node) => { 
          drag(drop(node));  
          if (ref && typeof ref === 'function') ref(node);  
        }} 
        style={{ cursor: 'pointer', marginBottom: '10px' }} 
        onClick={() => handleToggleVisited(destination.id)}
      >
        <strong>{destination.name}</strong> – {destination.description}
      </li>
    );
  }
);

export default DestinationItem;
