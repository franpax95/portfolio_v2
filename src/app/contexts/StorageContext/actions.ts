import { IStorageActions } from '@interfaces/IStorageActions';
import { Storage } from '@states/storage';

export const storageActions: IStorageActions = {
  get: <T>(key: Storage): T | null => {
    const item: string = localStorage.getItem(key) || '';
    return !item ? null : (JSON.parse(item) as T);
  },

  set: <T>(key: Storage, value: T): void => {
    const item: string = JSON.stringify(value);
    localStorage.setItem(key, item);
  },

  remove: (key: Storage): void => {
    localStorage.removeItem(key);
  }
};
