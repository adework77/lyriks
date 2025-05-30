 import { Link } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import PlayPause from "./PlayPause";
 import { playPause, setActiveSong } from "../redux/features/playerSlice";
 
 const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const activeSong = 'Test';

  const handlePauseClick = () => {

  };

  const handlePlayClick = () => { 

  }; 

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-53 group">
      <div className={`absolute inset-0 items-center justify-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.attributes?.name === song?.attributes?.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song} 
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      <img src={song?.attributes?.artwork.url} alt="song_img" className="object-contain h-full"/>
    </div>

    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${song?.id}`}>
          {song?.attributes?.name}
        </Link>
      </p>
    </div>
  </div>
  )
};

export default SongCard;
