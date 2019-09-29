import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import { UserProfileContextProvider, UserProfileContext } from "./contexts/UserProfileContext";
import IUserProfileContextType from "./types/IUserProfileContextType";
import IContextType from "./types/IContextType";
import Summary from "./views/Summary/Summary";
import SignOut from "./views/SignOut/SignOut";

const ViewSignIn = () => {
    return <SignIn/>;
};

const ViewSignUp = () => {
    return <SignUp/>;
};

const ViewSignOut = () => {
    return <SignOut/>;
};

const ViewSummary = () => {
    return <Summary/>;
};

const RouterNoLoggedUser = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" render={() => <ViewSummary />} />
                <Route exact path="/signout" render={() => <ViewSignOut />} />
                <Redirect exact path="/signin" to="/" />
                <Redirect exact path="/signup" to="/" />
                <Route render={() => <h1>404</h1>} />
            </Switch>
        </Fragment>
    );
};

const RouterLoggedUser = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/signin" render={ViewSignIn} />
                <Route exact path="/signup" render={ViewSignUp} />
                <Redirect to="/signin" />
            </Switch>
        </Fragment>
    );
};

const RouterBuilder = (props : IContextType<IUserProfileContextType>) => {
    const { userIsAuthenticated } = props.state;
    if(userIsAuthenticated){
        return RouterNoLoggedUser();
    }else{
        return RouterLoggedUser();
    }
};

const App: React.FC = () => {
    return (
        <UserProfileContextProvider>
            <Router>
                <UserProfileContext.Consumer>
                    {RouterBuilder}
                </UserProfileContext.Consumer>
            </Router>
        </UserProfileContextProvider>
    );
};

export default App;
