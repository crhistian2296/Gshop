import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

//Router con rutas privadas y publicas

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<PublicRoutes />}>
            <Route path='' element={<Login />} />
          </Route>
          <Route path='' element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<Navigate to={<Home />} />} />
          </Route>
        </Routes>
        <Navbar />
      </Router>
    </>
  );
};

export default AppRouter;
