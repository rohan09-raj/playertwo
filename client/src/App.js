import React, {useState, Suspense, lazy} from 'react';
import {Button} from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Loading from './components/Loading/Loading';
import * as ROUTES from "./constants/routes";

const Startup = lazy(() => import("./pages/startup"));
const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/not-found.js"));

export default function App() {
  // const [open, setOpen] = useState(false);
  // const handleClick = () => setOpen(!open);

  const AppRoutes = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Startup />} path={ROUTES.STARTUP} />
          <Route element={<Login />} path={ROUTES.LOGIN} />
          <Route element={<Dashboard />} path={ROUTES.DASHBOARD} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    )
  }

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
