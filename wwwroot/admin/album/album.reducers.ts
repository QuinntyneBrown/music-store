import * as actions from "./album.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAlbumReducer = (state, action) => {
    if (action instanceof actions.RemoveAlbumAction)
        pluckOut({ items: state.albums, value: action.entity.id });
    return state;
}

export const addAlbumReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAlbumAction) {
        addOrUpdate({ items: state.albums, item: action.entity });
    }
    return state;
}

export const allAlbumsReducer = (state, action) => {
    if (action instanceof actions.AllAlbumsAction) {
        state.albums = action.entities;
    }
    return state;
}

export const setCurrentAlbumReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAlbumAction) {
        state.currentAlbumId = action.id;
    }
    return state;
}
