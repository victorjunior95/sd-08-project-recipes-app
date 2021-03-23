export const SHOW_HEADER_ACTION = 'SHOW_HEADER_ACTIONS';

export const showHeaderAction = (titleHeader, showButtonSearch) => ({
  type: SHOW_HEADER_ACTION, payload: { titleHeader, showButtonSearch } });
