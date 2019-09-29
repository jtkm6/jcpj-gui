import axios from 'axios';
import {AJAX_BASE_URL, AJAX_CLIENT_ID, AJAX_CLIENT_SECRET} from "../constants/Static";

const signIn = (username: string, password: string) => {

    const bodyFormData = new FormData();
    bodyFormData.set('grant_type', 'password');
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);

    return axios.request({
        url: "/oauth/token",
        method: "post",
        baseURL: AJAX_BASE_URL,
        auth: {
            username: AJAX_CLIENT_ID,
            password: AJAX_CLIENT_SECRET
        },
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' },
    });

};

export {signIn};
