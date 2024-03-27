import React, { lazy, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import SignInView from '../views/account/sign-in';
import LowCodeViewSetting from '@/views/low-code-setting/LowCodeViewSetting';
import DevelopView from 'src/views/develop-view';
import LowCodeView from '@/views/low-code-view';

export const routes: RouteObject[] = [
    { path: '/sign-in', element: <SignInView /> },
    {
        path: '/develop-view',
        element: <DevelopView />,
    },
    {
        path: '/low-code-view',
        element: <LowCodeViewSetting isView />,
    },
    {
        path: '/',
        element: <LowCodeViewSetting isView={false} />,
    },
];

// 生成路由
const AppRoutes = () => {
    return useRoutes(routes);
};

export default AppRoutes;
