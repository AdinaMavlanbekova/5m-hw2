import {types} from "./types";


export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function changeAboutTitleAction() {
    return {
        type: types.CHANGE_ABOUT_TITLE
    }
}

export function withParamsAction() {
    return {
        type: types.WITH_PARAMS,
        payload: 'hello geeks'
    }
}

export function fromInputAction(input) {
    return{
        type: types.FROM_INPUT,
        payload: input
    }
}

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert('hello')
        },2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}


function getMoreAction(userInfo) {
    return {
        type: types.GET_MORE,
        payload: userInfo
    }
}

export function fetchMoreAction(id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getMoreAction(data))
    }
}
// export function fetchDataAction(id){
//     return async function (dispatch) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         const data = await response.json()
//         dispatch(getMoreAction(data))
//     }
// }
