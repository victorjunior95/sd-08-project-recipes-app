export const Types = {
  FETCH: 'cocktailAreas/FETCH',
  FETCH_SUCCESS: 'cocktailAreas/FETCH_SUCCESS',
  FETCH_ERROR: 'cocktailAreas/FETCH_ERROR',
};

const INITIAL_STATE = {
  isFetching: false,
  notFound: false,
  areas: [],
  error: '',
};

const areas = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.FETCH:
    return { ...state, isFetching: true, notFound: false };

  case Types.FETCH_SUCCESS:
    return {
      ...state,
      isFetching: false,
      notFound: action.payload.length === 0,
      areas: action.payload,
      error: '',
    };

  case Types.FETCH_ERROR:
    return {
      ...state,
      isFetching: false,
      notFound: true,
      areas: [],
      error: action.payload,
    };

  default: return state;
  }
};

export const Creators = {
  setFetch: () => ({
    type: Types.FETCH,
  }),

  fetchSuccess: (results) => ({
    type: Types.FETCH_SUCCESS,
    payload: results,
  }),

  fetchError: (error) => ({
    type: Types.FETCH_ERROR,
    payload: error,
  }),
};

export default areas;
