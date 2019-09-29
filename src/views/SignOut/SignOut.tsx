import React from 'react';
import {UserProfileContext} from "../../contexts/UserProfileContext";
import * as ActionsType from "../../constants/Actions";
import {Redirect} from "react-router";
import {clearUserInfo} from "../../utils/storageManager";

const SignOut: React.FC = () => {
    const {state, dispatch} = React.useContext(UserProfileContext);

    const payload = {...state, userIsAuthenticated: false};

    dispatch({
        type: ActionsType.REDUCER_USER_PROFILE,
        payload: payload
    });

    clearUserInfo();

    return <Redirect to="/" />;
};

export default SignOut;
