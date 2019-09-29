import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../../components/Copyright/Copyright';
import SignInComponent from '../../components/SignIn/SignIn';
import {UserProfileContext} from "../../contexts/UserProfileContext";
import {signIn} from "../../provider/SignIn";
import * as ActionsType from "../../constants/Actions";
import {saveUserInfo} from "../../utils/storageManager";

const SignIn: React.FC = () => {
    const {state, dispatch} = React.useContext(UserProfileContext);
    const [loading, setLoading] = React.useState(false);

    const signInCallback = (username: string, password: string, keepSessionActive: boolean) : void => {
        const payload = {...state};

        setLoading(true);

        signIn(username, password)
            .then(response => {
                const {data} = response;
                payload.userIsAuthenticated = true;
                payload.refreshToken = data['refresh_token'];
                payload.accessToken = data['access_token'];
                payload.tokenType = data['token_type'];
                payload.expiresIn = data['expires_in'];
                payload.scope = data['scope'];
                payload.email = data['email'];
                if(keepSessionActive){
                    saveUserInfo(payload);
                }
            })
            .catch(response => {
                payload.userIsAuthenticated = false;
                payload.refreshToken = null;
                payload.accessToken = null;
                payload.tokenType = null;
                payload.expiresIn = null;
                payload.scope = null;
                payload.email = null;
            }).finally(() => {
                setLoading(false);
                dispatch({
                    type: ActionsType.REDUCER_USER_PROFILE,
                    payload: payload
                });
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <SignInComponent signInCallback={signInCallback} loading={loading}/>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
};

export default SignIn;
