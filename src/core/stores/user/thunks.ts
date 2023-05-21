import { AsyncStorage, createAsyncThunk, lodash } from '~/libs';
import { PERSIST_KEYS, STORAGE_KEYS } from '~/utils';

export const getUserStored = createAsyncThunk(
  `${PERSIST_KEYS.USER_REDUX_SLICER}/getUserStored`,
  async () => {
    const user = await AsyncStorage.getItem(STORAGE_KEYS.STORED_USER);
    return JSON.parse(user!);
  },
);

export const registerUser = createAsyncThunk(
  `${PERSIST_KEYS.USER_REDUX_SLICER}/registerUser`,
  async (user: UserState) => {
    await AsyncStorage.setItem(STORAGE_KEYS.STORED_USER, JSON.stringify(user));

    return user;
  },
);

export const auth = createAsyncThunk(
  `${PERSIST_KEYS.USER_REDUX_SLICER}/auth`,
  async (credentials: Credentials) => {
    const user = JSON.parse(
      (await AsyncStorage.getItem(STORAGE_KEYS.STORED_USER)) ?? '',
    );

    if (
      lodash.isEqual(user.email, credentials.email) &&
      lodash.isEqual(user.password, credentials.password)
    )
      return true;

    return false;
  },
);
