import React, {useRef, useState} from 'react'
import LibrarySong from './LibrarySong';

const Library = ({songs}) => {

    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
            {songs.map(songs => (<LibrarySong song={song} /> ))
                
            }
            </div>
        </div>

    )
}

export default Library;