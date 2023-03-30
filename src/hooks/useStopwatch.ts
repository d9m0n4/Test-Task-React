import React from 'react';

const useStopwatch = () => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [time, setTime] = React.useState<number>(0)

    const counter = React.useRef<NodeJS.Timeout | null>(null)

    const handlePlay = () => {
        setIsPlaying(true)
        counter.current = setInterval(() => {
            setTime((t) => t + 1)
        }, 1000)
    }

    const handlePause = () => {
        setIsPlaying(false)
        clearInterval(counter.current as NodeJS.Timer)
    }

    const handleStop = () => {
        setIsPlaying(false)
        clearInterval(counter.current as NodeJS.Timer)
        setTime(0)
    }

    return {
        handlePlay, handlePause, handleStop, isPlaying, time
    }
};

export default useStopwatch;