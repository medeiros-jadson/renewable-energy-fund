import { ThemeType, theme, themeFormatter } from '~/core/theme';
import { PayloadAction, PersistReducer, createSlice } from '~/libs';
import { PERSIST_KEYS, svg } from '~/utils';

import { getPersistConfig } from '../root.service';

const initialState: ThemeState<ThemeType> = {
  theme: themeFormatter(theme),
  svg,
};

const userSlice = createSlice({
  name: PERSIST_KEYS.THEME_REDUX_SLICER,
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<ThemeState<ThemeType>>) {
      state.theme = payload.theme;
    },
  },
});

export const { setTheme } = userSlice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.THEME_REDUX_SLICER),
  userSlice.reducer,
);
