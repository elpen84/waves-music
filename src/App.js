import React, {useState, useRef} from 'react';
import Player from "./components/Player";
import Song from  "./components/Song";
import Library from  "./components/Library";
import './styles/app.scss';
//import util
import chillHop from "./data";

function App() {
  //state
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false)
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
});
  //Ref
  const audioRef = useRef(null);
  // getting song time/duration
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration })
}


  

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player  
      audioRef={audioRef}
      setIsPlaying={setIsPlaying } 
      isPlaying={isPlaying} 
      currentSong={currentSong}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      />
      <Library 
      audioRef={audioRef}
      setCurrentSong={setCurrentSong}
      songs={songs} 
      isPlaying={isPlaying} 
      />
      <audio 
           onLoadedMetadata={timeUpdateHandler}
           onTimeUpdate={timeUpdateHandler} 
           ref={audioRef} 
           src={currentSong.audio}>
           </audio>
    </div>
  );
}

export default App;
