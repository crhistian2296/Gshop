import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './router/AppRouter';

function App() {
  const init = () => JSON.parse(localStorage.getItem('users')) || [];

  // const initialValue = {
  //   name: 'frontend',
  //   password: 'gshop',
  //   logged: true,
  // };
  const [state, dispatch] = useReducer(authReducer, [], init);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state));
    // console.log(state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
