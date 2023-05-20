import { AsyncStorage, AsyncStorageStatic } from '~/libs';

export declare type GetPersistConfig = {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: string[];
};

export function getPersistConfig(
  key: string,
  whitelist?: string[],
): GetPersistConfig {
  return {
    key,
    storage: AsyncStorage,
    whitelist: whitelist ?? [''],
  };
}
