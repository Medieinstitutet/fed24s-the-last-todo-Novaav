import { useState } from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';  // Ändra till DndProvider
import { HTML5Backend } from 'react-dnd-html5-backend';
import DestinationForm from './components/DestinationForm';  // Importera formulärkomponenten
import DestinationList from './components/DestinationList';  // Importera listkomponenten

type Destination = {
  id: number;
  name: string;
  description: string;
  visited: boolean;
};

function App() {
  const [destinations, setDestinations] = useState<Destination[]>([
    { id: 1, name: 'Kuba', description: 'Salsa, stränder och gamla bilar', visited: false },
    { id: 2, name: 'Brasilien', description: 'Favelas och Carnival', visited: false },
    { id: 3, name: 'Bangkok', description: 'Takbarer och street food', visited: false },
    { id: 4, name: 'Seychellerna', description: 'Paradis', visited: false }
  ]);

  const [newDestination, setNewDestination] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');

  const handleToggleVisited = (id: number) => {
    setDestinations(prev =>
      prev.map(dest => (dest.id === id ? { ...dest, visited: !dest.visited } : dest))
    );
  };

  const handleAddDestination = () => {
    const newDest = {
      id: destinations.length + 1,
      name: newDestination,
      description: newDescription,
      visited: false
    };
    setDestinations([...destinations, newDest]);
    setNewDestination('');
    setNewDescription('');
  };
  

  const moveDestination = (dragIndex: number, hoverIndex: number) => {
    const updatedDestinations = [...destinations];
    const [movedItem] = updatedDestinations.splice(dragIndex, 1);
    updatedDestinations.splice(hoverIndex, 0, movedItem);
    setDestinations(updatedDestinations);
  };

  return (
    <DndProvider backend={HTML5Backend}> {/* Ändra till DndProvider */}
      <div className="App">
        <h1>Resmål jag vill besöka 🌍</h1>

        <DestinationForm
          newDestination={newDestination}
          setNewDestination={setNewDestination}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          handleAddDestination={handleAddDestination}
        />

        <DestinationList
          destinations={destinations}
          handleToggleVisited={handleToggleVisited}
          moveDestination={moveDestination}
        />
      </div>
    </DndProvider> 
  );
}

export default App;
