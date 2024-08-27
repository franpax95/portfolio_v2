import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './index.scss';
import { StorageProvider } from '@contexts/StorageContext';
import { LanguageProvider } from '@app/contexts/LanguageContext/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StorageProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StorageProvider>
  </StrictMode>
);
