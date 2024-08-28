import { Storage } from '@states/storage';

export interface IStorageActions {
  get: <T>(key: Storage) => T | null;
  set: <T>(key: Storage, value: T) => void;
  remove: (key: Storage) => void;
}
