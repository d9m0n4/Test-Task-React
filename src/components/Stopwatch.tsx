import Play from "./ui/Play";
import Pause from "./ui/Pause";
import Stop from "./ui/Stop";
import useStopwatch from "../hooks/useStopwatch";
import {formatTime} from "../utils/formatTime";


export const Stopwatch = () => {

    const {handlePlay, handlePause, handleStop, isPlaying, time} = useStopwatch()

    return (
       <div className={`stopwatch ${isPlaying && 'active'}`}>
           <div className="stopwatch__row">
               <span className="stopwatch__duration">{formatTime(time)}</span>
           </div>
           <div className="stopwatch__row">

               {!isPlaying && <button className='button stopwatch__button' onClick={handlePlay}>
                   <Play isActive={isPlaying}/>
               </button>}

               {isPlaying && <button className='button stopwatch__button' onClick={handlePause}>
                   <Pause isActive={isPlaying}/>
               </button>}

               <button className='button stopwatch__button'  onClick={handleStop}>
                   <Stop isActive={isPlaying}/>
               </button>
           </div>
       </div>
    )
}