import {types} from "./types";

const initialState = {
    infos: null
}

export default function userInfoReducer(state = initialState, action){

    if (action.type === types.GET_MORE) {
        return {...state, infos: action.payload}
    }

    return state

}