import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoreAction} from "../redux/actions";


const User = ({userInfo}) => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.userInfoReducer.infos)

    console.log(info)
    const getMore = (id) => {
        console.log(id)
        dispatch(fetchMoreAction(id))
    }

    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <button onClick={() =>getMore(userInfo.id)}>get more</button>
            { info && info.id === userInfo.id &&
                    <ul key={info.id}>
                        <li>{info.id}</li>
                        <li>email: {info.email}</li>
                        <li>address: {info.address.street}</li>
                        <li>suite: {info.address.suite}</li>
                        <li>city: {info.address.city}</li>
                        <li>zipcode: {info.address.zipcode}</li>
                        <li>phone: {info.phone}</li>
                        <li>website: {info.website}</li>
                        <li>company: {info.company.name}</li>
                        <li>------------</li>
                    </ul>
            }
        </ul>
    )
}

export default User;