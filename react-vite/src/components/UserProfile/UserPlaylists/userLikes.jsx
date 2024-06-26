import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchLikes } from "../../../redux/user"
import { thunkFetchSongs } from "../../../redux/songs";
import './userLikes.css';

const LikedSongs = () => {
    const dispatch = useDispatch();
    const likedSongs = useSelector(state => state.users.likes);
    console.log("=====> likedsong", likedSongs)
    const songsById = useSelector(state => state.songs);
    const fetchedSongIds = useRef(new Set());

    useEffect(() => {
        dispatch(thunkFetchLikes());
    }, [dispatch]);

    useEffect(() => {
        const newSongIds = likedSongs.filter(song_id => !fetchedSongIds.current.has(song_id));
        newSongIds.forEach(song_id => {
            if (!songsById[song_id]) {
                dispatch(thunkFetchSongs());
                fetchedSongIds.current.add(song_id);
            }
        });
    }, [dispatch, likedSongs, songsById]);

    return (
        <div className="user-songs-container">
            <h2>Liked Songs</h2>
            {likedSongs.length > 0 ? (
                <div className="songs-grid">
                    {likedSongs.map(song_id => {
                        const song = songsById[song_id];
                        return song ? (
                            <div key={song_id} className="song-item">
                            <a href={`/songs/${song.id}`}>
                                <img src={song.preview_img} alt={`Placeholder for ${song.title}`} className="album-image" />
                            </a>
                                <div className="song-details">
                                    <div className="song-title">{song.title}</div>
                                    <div className="song-album">{song.album}</div>
                                    <div className="song-artist">by {song.artist}</div>
                                </div>
                            </div>
                        ) : (
                            <div key={song_id} className="song-item">
                                <p className="loading-text">Loading...</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="loading-text">No liked songs yet.</p>
            )}
        </div>
    );
};

export default LikedSongs;
