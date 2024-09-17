import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fromInputAction, withParamsAction} from "../redux/actions";

const ContactsPage = () => {

    const [input, setInput] = useState('')

    const contactsTitle = useSelector(state => state.contactsReducer.contactsTitle)
    const dispatch = useDispatch()

    const withParams = () => {
        dispatch(withParamsAction())
    }

    const addInput = () => {
        dispatch(fromInputAction(input))
    }

    return (
        <div>
            <h1>{contactsTitle}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>----------------------------------</p>
            <input onChange={(event) => setInput(event.target.value)} type="text"/>
            <button onClick={addInput}>add</button>
        </div>
    )
}
export default ContactsPage;