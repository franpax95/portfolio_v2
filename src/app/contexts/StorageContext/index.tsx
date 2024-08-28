import { ReactNode, createContext } from 'react';
import { storageActions } from './actions';
import { IStorageActions } from '@interfaces/IStorageActions';

interface StorageProviderProps {
  children: ReactNode;
}

export const StorageContext = createContext<IStorageActions | null>(null);

export const StorageProvider: React.FC<StorageProviderProps> = ({ children }) => {
  const value = { ...storageActions };
  return <StorageContext.Provider value={value}>{children}</StorageContext.Provider>;
};
