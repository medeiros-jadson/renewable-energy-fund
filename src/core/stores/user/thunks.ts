import { createAsyncThunk } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

export const getUserData = createAsyncThunk(
  `${PERSIST_KEYS.USER_REDUX_SLICER}/getUserData`,
  async () => {
    return {} as UserState;
  },
);
