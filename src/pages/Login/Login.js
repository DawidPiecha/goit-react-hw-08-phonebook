import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
