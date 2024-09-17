import {types} from "./types";

const initialState = {
    aboutTitle: 'old title',
}

export default function aboutReducer(state = initialState, action) {

    if(action.type === types.CHANGE_ABOUT_TITLE) {
        return {...state, aboutTitle: 'new about title'}
    }
    return state
}