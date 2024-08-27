import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './index.scss';
import { StorageProvider } from '@contexts/StorageContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StorageProvider>
      <App />
    </StorageProvider>
  </StrictMode>
);
