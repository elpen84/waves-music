import React, {useRef, useState} from 'react'
import LibrarySong from './LibrarySong';

const Libray = () => {

    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
            <LibrarySong />
            </div>
        </div>

    )
}

export default Library;