import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Component />;
  }
  return <Navigate to={path} />;
};
