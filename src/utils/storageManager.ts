import * as Static from "../constants/Static";
import IUserProfileContextType from "../types/IUserProfileContextType";

export const saveUserInfo = (object : IUserProfileContextType) : void => {
    localStorage.setItem(
        Static.STORAGE_NAME,
        JSON.stringify(object)
    );
};

export const getUserInfo = () : IUserProfileContextType | null => {
    const storageItem = localStorage.getItem(Static.STORAGE_NAME);
    return storageItem ? JSON.parse(storageItem) : null;
};

export const clearUserInfo = () : void => {
    localStorage.removeItem(Static.STORAGE_NAME);
};

