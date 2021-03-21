import { combineReducers } from 'redux';

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const toggleTheme = (theme) => ({
  type: TOGGLE_THEME,
  payload: theme,
});

const INITIAL_STATE = {
  darkModeEnabled: false,
};

const Settings = (state = INITIAL_STATE, action) => {
  // console.debug(action.type);
  // console.debug('payload: ', action.payload);

  switch (action.type) {
    case 'TOGGLE_THEME':
      switch (action.payload) {
        case true:
          return { ...state, darkModeEnabled: true };
        case false:
          return { ...state, darkModeEnabled: false };
      }
    default:
      return state;
  }
};

export default combineReducers({
  Settings,
});
