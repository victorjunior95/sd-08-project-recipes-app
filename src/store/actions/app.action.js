export const APP_LOCATION = 'APP_LOCATION';
export const ID_CURRENT = 'ID_CURRENT';
export const ID_FAVORITE = 'ID_FAVORITE';

export const setIdCurrent = (payload) => ({
  type: ID_CURRENT,
  payload,
});

export const addIdFavorite = (payload) => ({
  type: ID_FAVORITE,
  payload,
});

export const setAppLocation = (payload) => ({
  type: APP_LOCATION,
  payload,
});
