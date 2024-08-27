import { Storage } from '@states/storage';

export interface IStorageActions {
  get: <T>(key: Storage) => T;
  set: <T>(key: Storage, value: T) => void;
  remove: (key: Storage) => void;
}
