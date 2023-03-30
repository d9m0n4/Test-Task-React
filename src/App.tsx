import React from 'react';
import {Stopwatch} from "./components/Stopwatch";
import AddStopwatch from "./components/AddStopwatch";
import {getUniqueId} from "./utils/getUniqueId";

function App() {
    const initialState = [{id: getUniqueId() }]
    const [timers, setTimers] = React.useState(initialState)

  return (
    <div className='app__wrapper'>
      <div className="stopwatch__grid">
          {timers.map(timer => (
              <Stopwatch key={timer.id}/>
          ))}
          <AddStopwatch onAdd={() => setTimers((t) => ([...t, {id: getUniqueId()}]))}/>
      </div>
    </div>
  );
}

export default App;
