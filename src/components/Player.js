import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight,faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef,currentSong, setCurrentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setSongs}) => {
    //useref html element
    
    //event handler
    // UseEffect
    useEffect(() => {
       const newSongs = songs.map((song) => {
           if (song.id === currentSong.id) {
               return {
                   ...song,
                   active: true,
               }
           } else {
               return {
                   ...song,
                   active: false,
               }
           }
       })
       setSongs(newSongs);
    }, [currentSong])

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

    const skipTraceHandler = (direction) => {
            let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
            if(direction === 'skip-forward') {
                setCurrentSong(songs[(currentIndex+ 1) % songs.length]);
            }
            if(direction === 'skip-back')  {
                if((currentIndex - 1) % songs.length === -1) {
                    setCurrentSong(songs[songs.length - 1]);
                    return;
                }
                setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            }
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
            <FontAwesomeIcon className="skip-back" 
            onClick={()=> skipTraceHandler('skip-back')} 
            icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} 
            className="play" 
            icon={isPlaying ? faPause : faPlay}
            />
            <FontAwesomeIcon 
            className="skip-forward" 
            icon={faAngleRight}
            onClick={()=> skipTraceHandler('skip-forward')} 
            />
           </div>
        </div>
    )
};

export default Player;