import React from 'react'


const LibrarySong = ({songs}) => {

    return (
        <div className='library-song'>
            <img src={songs.cover} alt={songs.name}/> 
            <div className="song-description">
            <h3>{songs.name}</h3>
            <h4>{songs.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
