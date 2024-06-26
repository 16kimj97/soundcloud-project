import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchSongs } from "../../../redux/user";
import './userTracks.css'
import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";
import DeleteSongModal from "../../DeleteModal";
import { Link } from 'react-router-dom'

const UserTracks = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.users.songs);
    


    useEffect(() => {
        dispatch(thunkFetchSongs());
    }, [dispatch]);
    if(songs.message === "song not found") {
        return <>
        <h1 style={{textAlign: "center"}}>No Song Yet</h1>
        </>
    }

    return (
        <div className="user-songs-container">
            <h2>User Songs</h2>
            {songs ? (
                <div className="songs-grid">
                    {songs.map(song => (
                        <div key={song.id} className="song-item">
                            <a href={`/songs/${song.id}`}>
                                <img src={song.preview_img} alt={`Placeholder for ${song.preview_img}`} />
                            </a>
                            <div className="song-details">
                                <div className="song-title">{song.title}</div>
                                <div className="song-artist">by {song.artist}</div>
                            </div>
                            <div className="div-button-holder">
                                <button className ="updateButton">
                                    <Link to={`/song/${song.id}/edit`} className="updateButton">Update</Link>
                                </button>
                                {/* <button onClick={(e) => updateSong(e, song.id)}><p>Update</p></button> */}

                                <button className="deleteButton">
                                    <OpenModalMenuItem
                                        itemText="Delete"
                                        //     onItemClick={closeMenu}
                                        modalComponent={<DeleteSongModal songId={song.id} />}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="loading-text">Loading songs...</p>
            )}
        </div>
    );
};

export default UserTracks;
