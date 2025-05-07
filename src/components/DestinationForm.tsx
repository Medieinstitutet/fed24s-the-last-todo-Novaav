
import React from 'react';

interface Props {
  newDestination: string;
  newDescription: string;
  setNewDestination: React.Dispatch<React.SetStateAction<string>>;
  setNewDescription: React.Dispatch<React.SetStateAction<string>>;
  handleAddDestination: () => void;
}

const DestinationForm: React.FC<Props> = ({ 
  newDestination, 
  newDescription, 
  setNewDestination, 
  setNewDescription, 
  handleAddDestination 
}) => {
  return (
    <div className="add-destination">
      <h3>Lägg till ett nytt resmål</h3>
      <input
        type="text"
        placeholder="Resmålens namn"
        value={newDestination}
        onChange={(e) => setNewDestination(e.target.value)}
      />
      <input
        type="text"
        placeholder="Beskrivning"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={handleAddDestination}>Lägg till resmål</button>
    </div>
  );
}

export default DestinationForm;
