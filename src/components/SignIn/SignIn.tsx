import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";
import {Theme} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

interface ISignInComponentsPropsType {
    signInCallback(username : string, password : string, keepSessionActive : boolean): void;
    loading : boolean;
}

interface ISignInComponentsStateType {
    userName: string;
    password: string;
    keepSessionActive: boolean;
}

const useStyles = makeStyles((theme : Theme) => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -8,
        marginLeft: -12,
    },
}));

const SignIn: React.FC<ISignInComponentsPropsType> = (props) => {
    const classes = useStyles();

    const [values, setValues] = React.useState<ISignInComponentsStateType>({
        userName: '',
        password: '',
        keepSessionActive: false
    });

    const { signInCallback, loading } = props;

    const handleTextChange = (name : string) => (event : any) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleCheckKeepSessionActiveChange = (event : any) => {
        const value : boolean = values.keepSessionActive;
        setValues({ ...values, keepSessionActive: !value });
    };

    const handleSubmit = (event : any) => {
        event.preventDefault();

        const { userName, password, keepSessionActive } = values;

        signInCallback(userName, password, keepSessionActive);
    };

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                {"Sign in"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onChange={handleTextChange('userName')}
                    value={values.userName}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleTextChange('password')}
                    value={values.password}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                    onChange={handleCheckKeepSessionActiveChange}
                    value={values.keepSessionActive}
                />


                <div className={classes.wrapper}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        {"Sign In"}
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
                <Grid container>
                    <Grid item>
                        <NavLink to="/signup">
                            {"Don't have an account? Sign Up"}
                        </NavLink>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default SignIn;
