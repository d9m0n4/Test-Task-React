import Play from "./ui/Play";
import Pause from "./ui/Pause";
import Stop from "./ui/Stop";
import useStopwatch from "../hooks/useStopwatch";


export const Stopwatch = () => {

    const {handlePlay, handlePause, handleStop, isPlaying, time} = useStopwatch()

    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${Number(minutes) % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)


        const result = null



        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
       <div className={`stopwatch ${isPlaying && 'active'}`}>
           <div className="stopwatch__row">
               <span className="stopwatch__duration">{formatTime()}</span>
           </div>
           <div className="stopwatch__row">

               {!isPlaying && <button className='button stopwatch__button' onClick={handlePlay}>
                   <Play isActive={isPlaying}/>
               </button>}

               {isPlaying && <button className='button stopwatch__button' onClick={handlePause}>
                   <Pause isActive={isPlaying}/>
               </button>}

               <button className='button stopwatch__button' onClick={handleStop}>
                   <Stop isActive={isPlaying}/>
               </button>
           </div>
       </div>
    )
}