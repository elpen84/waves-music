import React from 'react'


const LibrarySong = ({setCurrentSong, songs, song, id}) => {
    const songSelectHandler  = async ()  => {
        // const selectedSong = song;
        await setCurrentSong(song);
       //add active state
    }

    return (
        <div className='library-song' onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}/> 
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
