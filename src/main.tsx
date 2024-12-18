
import { StyleProvider } from '@ant-design/cssinjs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
      <StrictMode>
            <StyleProvider layer>
                  <RouterProvider router={router} />
            </StyleProvider>
    </StrictMode>,
);