import {combineReducers} from "redux";
import mainReducer from "./mainReducer";
import aboutReducer from "./aboutReducer";
import contactsReducer from "./contactsReducer";
import usersReducer from "./usersReducer";
import userInfoReducer from "./userInfoReducer";

export const rootReducer = combineReducers({
    mainReducer,
    aboutReducer,
    contactsReducer,
    usersReducer,
    userInfoReducer
})


// const initialState = {
//     title: 'GeekTech!',
//     aboutTitle: 'old title',
//     contactsTitle: ''
// }


// export default function reducer(state = initialState, action) {
//
//     if(action.type === types.CHANGE_TITLE) {
//         return {...state, title: 'GEEKS!', aboutTitle: 'new about title'}
//     } else if(action.type === types.WITH_PARAMS) {
//         return {...state, contactsTitle: action.payload}
//     } else if (action.type === types.FROM_INPUT) {
//         return {...state, contactsTitle: action.payload}
//     }
//
//
//     return state
// }