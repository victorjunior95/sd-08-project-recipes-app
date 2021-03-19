const INITIAL_STATE = {
  email: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case 'USER_LOGIN':
    return { ...payload, email: payload };

  default:
    return state;
  }
}
