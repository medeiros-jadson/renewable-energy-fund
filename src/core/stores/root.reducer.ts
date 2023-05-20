import { AnyAction, Reducer, combineReducers } from '~/libs';

import user from './user/slices';

const combinedReducers = combineReducers({ user });

type RootState = ReturnType<typeof combinedReducers>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducers(state, action);
};

export default rootReducer;
