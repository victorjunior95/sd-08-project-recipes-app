import { deleteKeyLocalStorage } from '../../services';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });

const logoutUser = (payload) => ({ type: LOGOUT_USER, payload });

export function logoutUserAction() {
  return (dispatch) => {
    deleteKeyLocalStorage('user');
    dispatch(logoutUser);
  };
}
