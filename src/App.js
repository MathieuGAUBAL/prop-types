
import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Wilders from './components/Wilders';

const App = () => {
  const [currentGroup, setCurrentGroup] = useState('JOY');

  return (
    <div className="App">
      <Filter selectGroup={setCurrentGroup}/>
      <Wilders currentGroup={currentGroup}/>
    </div>
  );
}

export default App;
