import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../../components/Copyright/Copyright';
import SignUpComponent from '../../components/SignUp/SignUp';

const SignUp: React.FC = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <SignUpComponent />
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default SignUp;
