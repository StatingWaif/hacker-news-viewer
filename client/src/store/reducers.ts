import { TOGGLE_DARK_MODE } from "./actions";

interface IThemeState {
  isDarkMode: boolean;
}

const initialState: IThemeState = {
  isDarkMode: false,
};

interface ToggleDarkModeAction {
  type: typeof TOGGLE_DARK_MODE;
}

type ThemeActionTypes = ToggleDarkModeAction;

const themeReducer = (
  state: IThemeState = initialState,
  action: ThemeActionTypes
): IThemeState => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
