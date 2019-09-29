import React from "react";
import IContextType from "../types/IContextType";
import userProfileReducer, { initState } from "../reducers/UserProfileReducer";
import IUserProfileContextType from "../types/IUserProfileContextType";

const UserProfileContext = React.createContext<IContextType<IUserProfileContextType>>({
    state: initState,
    dispatch: () => {""; },
});

const UserProfileContextProvider = (props: { children: React.ReactNode; }) => {
    const [state, dispatch] = React.useReducer(userProfileReducer, initState);
    const value = { state, dispatch };

    return (
        <UserProfileContext.Provider value={value}>
            {props.children}
        </UserProfileContext.Provider>
    );
};

export { UserProfileContext, UserProfileContextProvider };
