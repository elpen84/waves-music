import React, {useState} from 'react';
import Player from "./components/Player";
import Song from  "./components/Song";
import './styles/app.scss';
//import util
import chillHop from "./data";

function App() {
  //state
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player  setIsPlaying={setIsPlaying } isPlaying={isPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;
