export const LOGIN = 'login';

export const logIn = (list) => ({
  type: LOGIN,
  payload: list,
});

export const LOGOUT = 'exit';

export const logOut = (list) => ({
  type: LOGOUT,
  payload: list,
});
