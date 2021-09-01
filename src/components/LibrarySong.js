import React from 'react'


const LibrarySong = ({setCurrentSong, songs, song, id, audioRef, isPlaying}) => {
    const songSelectHandler  = async ()  => {
        // const selectedSong = song;
        await setCurrentSong(song);
       //add active state
       audioRef.current.play();
       //check if the song is playing
       if(isPlaying) {
           const playPromise = audioRef.current.play();
           if(playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play();
            })
           }
       }
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
