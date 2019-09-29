import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/Copyright/Copyright';
import {Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Menu from "../Menu/Menu";

interface ILayoutComponentsPropsType {
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const Layout: React.FC<ILayoutComponentsPropsType> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Menu/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {props.children}
                </Container>
                <Copyright />
            </main>
        </div>
    );
};

export default Layout;
