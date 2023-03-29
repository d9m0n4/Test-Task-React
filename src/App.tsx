import React from 'react';
import {Stopwatch} from "./components/Stopwatch";
import AddStopwatch from "./components/AddStopwatch";

function App() {
  return (
    <div className='app__wrapper'>
      <div className="stopwatch__grid">
          <Stopwatch />
          <AddStopwatch />
      </div>
    </div>
  );
}

export default App;
