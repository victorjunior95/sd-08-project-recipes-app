import { SAVE_EMAIL, API_FOOD } from './types';

export const emailAccess = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const food = (data) => ({
  type: API_FOOD,
  payload: {
    data: [data],
  },
});
