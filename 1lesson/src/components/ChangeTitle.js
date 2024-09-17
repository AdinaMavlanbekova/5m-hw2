import React from "react";
import {useDispatch} from "react-redux";
import {changeAboutTitleAction} from "../redux/actions";

const ChangeTitle = () => {

    const dispatch = useDispatch()
    const changeAboutTitle = () => {
        dispatch(changeAboutTitleAction())
    }

    return (
        <div>
            <button onClick={changeAboutTitle}>change about title</button>
        </div>
    )

}
export default ChangeTitle;