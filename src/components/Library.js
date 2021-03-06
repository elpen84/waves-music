import React, {useRef, useState} from 'react'
import LibrarySong from './LibrarySong';

const Library = ({setCurrentSong,songs,audioRef, isPlaying, setSongs, libraryStatus}) => {

    return (
        <div className={` library ${libraryStatus ? 'active-library' : ''} `}>
            <h2>Library</h2>
            <div className="library-songs">
            {songs.map(song => (
            <LibrarySong 
            song={song}
            songs={songs} 
            setCurrentSong={setCurrentSong} 
            setSongs={setSongs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying} 
            /> 
            ))    
            }
            </div>
        </div>

    )
}

export default Library;