export const Types = {
  SAVE_NAME: 'SAVE_NAME',
  SAVE_ADDRESS: 'SAVE_ADDRESS',
};

export const Creators = {
  saveNameAction: (name) => ({
    type: Types.SAVE_NAME,
    payload: name,
  }),

  saveAddress: (address) => ({
    type: Types.SAVE_ADDRESS,
    payload: address,
  }),
};

const user = (state = {}, action) => {
  switch (action.type) {
  case Types.SAVE_NAME: return state;
  case Types.SAVE_ADDRESS: return state;
  default: return state;
  }
};

export default user;
