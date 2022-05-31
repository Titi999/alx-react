import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';

export const login = (email, password) => {
    return {
        type : LOGIN,
        user : { email, password }
    };
}

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({ type: DISPLAY_NOTIFICATION_DRAWER });

export const hideNotificationDrawer = () => ({ type: HIDE_NOTIFICATION_DRAWER });

const boundLogin = login.bind(LOGIN);
const boundLogout = logout.bind(LOGOUT);
const boundDisplayNotificationDrawer = displayNotificationDrawer.bind(DISPLAY_NOTIFICATION_DRAWER);
const boundHideNotificationDrawer = hideNotificationDrawer.bind(HIDE_NOTIFICATION_DRAWER);

export const loginSuccess = () => ({ type: LOGIN_SUCCESS});
export const loginFailure = () => ({ type: LOGIN_FAILURE});

export const loginRequest = (email, password) => {
    
}
