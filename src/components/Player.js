import React, { useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight,faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef,currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo}) => {
    //useref html element
    
    //event handler

    //play function
    const playSongHandler = () => {
         isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
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
  

    return (
        <div className='player'>
           <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input 
            onChange={draghandler}
            min={0} 
            max={songInfo.duration } 
            value={songInfo.currentTime} 
            type="range" />
            <p>{getTime(songInfo.duration || 0) }</p>
           </div>
           <div className="play-control">
            <FontAwesomeIcon className="skip-back" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay}/>
            <FontAwesomeIcon className="skip-forward" icon={faAngleRight}/>
           </div>
        </div>
    )
};

export default Player;