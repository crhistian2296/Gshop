import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<Navigate to={<Home />} />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
};

export default AppRouter;
