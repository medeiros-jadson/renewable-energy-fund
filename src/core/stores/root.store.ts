import { ThemeType } from '~/core/theme';
import {
  Action,
  Store,
  ThunkDispatch,
  configureStore,
  persistStore,
  useDispatch,
} from '~/libs';
import rootReducer from './root.reducer';

export const AppStore: Store<ApplicationState<ThemeType>> = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export declare type AppState = ReturnType<typeof AppStore.getState>;
export declare type ThunkAppDispatch = ThunkDispatch<
  ApplicationState<ThemeType>,
  void,
  Action
>;

export const Persistor = persistStore(AppStore);

export const useAppDispatch = (): ThunkAppDispatch =>
  useDispatch<ThunkAppDispatch>();
