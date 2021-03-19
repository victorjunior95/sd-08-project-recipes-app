export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = (payload) => ({ type: LOGOUT_USER, payload });
