import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    //useref html element
    const audioRef = useRef(null);
    //event handler

    //play function
    const playSongHandler = () => {
         isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
// getting song time/duration
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration })
    }
//formatting song time
    const getTime = (time) => {
        return (
            Math.floor(time / 60 ) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    };

  
    const draghandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo ({...setSongInfo, currentTime: e.target.value });
    }
  //state
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null,
    });

    return (
        <div className='player'>
           <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input 
            onChange={draghandler}
            min={0} 
            max={songInfo.duration} 
            value={songInfo.currentTime} 
            type="range" />
            <p>{getTime(songInfo.duration)}</p>
           </div>
           <div className="play-control">
            <FontAwesomeIcon className="skip-back" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay}/>
            <FontAwesomeIcon className="skip-forward" icon={faAngleRight}/>
           </div>
           <audio 
           
           onLoadedMetadata={timeUpdateHandler}
           onTimeUpdate={timeUpdateHandler} 
           ref={audioRef} 
           src={currentSong.audio}>
           </audio>
        </div>
    )
};

export default Player;