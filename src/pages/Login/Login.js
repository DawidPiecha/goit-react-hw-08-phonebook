import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
};

export default Login;
