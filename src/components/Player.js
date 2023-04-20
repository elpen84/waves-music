import React, { useState,useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight,faPause } from "@fortawesome/free-solid-svg-icons";
import {playAudio} from '../util'

const Player = ({audioRef,currentSong, setCurrentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setSongs}) => {
    const [volume, setVolume] = useState(60);
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
                    playAudio(isPlaying, audioRef)
                    return;
                }
                setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            }
            playAudio(isPlaying, audioRef)
    }

    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
        }
      }, [volume, audioRef]);
  

    return (
        <div className='player'>
           <div className="time-control">
            <p>{getTime(currentSong.duration || 0)}</p>
            <input 
            onChange={draghandler}
            min={0} 
            max={songInfo.duration } 
            value={songInfo.currentTime} 
            type="range" />
            <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00" }</p>
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
           <div className="volume-wrapper">
           <div className="volume">
      
      <input type="range" 
      min={0} 
      max={100} 
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
      />
    </div>
           </div>
        </div>
    )
};

export default Player;