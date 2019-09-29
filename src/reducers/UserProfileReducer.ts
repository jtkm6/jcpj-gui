import IActionType from "../types/IActionType";
import * as ActionsType from "../constants/Actions";
import IUserProfileContextType from "../types/IUserProfileContextType";
import {getUserInfo} from "../utils/storageManager";

const savedState = getUserInfo();

export const initState : IUserProfileContextType = savedState ? savedState : {
    userIsAuthenticated: false,
    accessToken: null,
    tokenType: null,
    refreshToken: null,
    expiresIn: null,
    scope: null,
    email: null
};

const userProfile = (prevState: IUserProfileContextType = initState, action: IActionType<IUserProfileContextType, string>) => {
    if (action.type === ActionsType.REDUCER_USER_PROFILE) {
        return action.payload;
    } else {
        return prevState;
    }
};

export default userProfile;
