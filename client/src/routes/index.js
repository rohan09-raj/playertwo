import React, {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Loading from '../components/Loading/Loading';

const Startup = lazy(() => import('../pages/startup/startup'));
const Login = lazy(() => import('../pages/login/login'));
const Dashboard = lazy(() => import('../pages/dashboard/dashboard'));
const ProfileForm = lazy(() => import('../pages/profileForm/profileForm'));
const NotFound = lazy(() => import('../pages/not-found.js'));
// const Messages = lazy(() => import('../pages/messages/messaages'));


const IndexRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Startup />} />
        <Route element={<Login />} path={ROUTES.LOGIN} />
        <Route element={<Dashboard />} path={ROUTES.DASHBOARD} />
        <Route element={<ProfileForm />} path={ROUTES.PROFILE} />
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default IndexRoutes;
