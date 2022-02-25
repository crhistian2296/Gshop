import { AuthContext } from './auth/AuthContext';
import AppRouter from './router/AppRouter';

function App() {
  const initialValue = {
    name: 'frontend',
    password: 'gshop',
    logged: true,
  };

  // loginRequest();
  // headerRequest();
  // const [state, dispatch] = useReducer(authReducer, {}, initialValue);

  return (
    <AuthContext.Provider value={initialValue}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
