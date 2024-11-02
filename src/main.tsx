
import { StyleProvider } from '@ant-design/cssinjs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import router from './routes/router';
import '@/styles/index.css';
import { light } from './configs/theme';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <StyleProvider layer>
                  <ConfigProvider theme={light}>
                        <RouterProvider router={router} />
                  </ConfigProvider>
            </StyleProvider>
    </StrictMode>,
);


