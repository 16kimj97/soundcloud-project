const LOAD_SONGS = 'songs/loadSongs';
const LOAD_SONG_BY_ID = 'songs/loadSongById';

// Action creators for loading data
export const loadSongs = songs => ({
    type: LOAD_SONGS,
    payload: songs
});

export const loadSongById = song => ({
    type: LOAD_SONG_BY_ID,
    payload: song
});

// Thunk actions
export const thunkFetchSongs = () => async dispatch => {
    const res = await fetch('/api/songs/');

    if (res.ok) {
        const songs = await res.json();
        dispatch(loadSongs(songs));
    }
};

export const thunkUploadSongs = (song) => async dispatch => {
    const res = await fetch('/api/songs/new', {
        method: 'POST',
        body: song
    });

    if (res.ok) {
        const uploadedSong = await res.json();
        dispatch(loadSongById(uploadedSong));
        return uploadedSong;
    } else {
        return "song thunk error";
    }
};

export const thunkFetchSongById = (songId) => async dispatch => {
    const res = await fetch(`/api/songs/${songId}`);
    const song = await res.json();
    dispatch(loadSongById(song));
    return song;
};

const songReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_SONGS: {
            const newSongsState = { ...state };
            action.payload.forEach(song => newSongsState[song.id] = song);
            return newSongsState;
        }
        case LOAD_SONG_BY_ID: {
            return { ...state, [action.payload.id]: action.payload };
        }
        default:
            return state;
    }
};

export default songReducer;
