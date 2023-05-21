import { PayloadAction, PersistReducer, createSlice } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { getPersistConfig } from '../root.service';
import { getUserStored, registerUser } from './thunks';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isOverEighteen: false,
};

const userSlice = createSlice({
  name: PERSIST_KEYS.USER_REDUX_SLICER,
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserState>) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.password = payload.password;
      state.isOverEighteen = payload.isOverEighteen;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        getUserStored.fulfilled,
        (state, { payload }: PayloadAction<UserState>) => {
          state.firstName = payload.firstName;
          state.lastName = payload.lastName;
          state.email = payload.email;
          state.password = payload.password;
          state.isOverEighteen = payload.isOverEighteen;
        },
      )
      .addCase(
        registerUser.fulfilled,
        (state, { payload }: PayloadAction<UserState>) => {
          state.firstName = payload.firstName;
          state.lastName = payload.lastName;
          state.email = payload.email;
          state.password = payload.password;
          state.isOverEighteen = payload.isOverEighteen;
        },
      ),
});

export const { setUser } = userSlice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.USER_REDUX_SLICER),
  userSlice.reducer,
);
