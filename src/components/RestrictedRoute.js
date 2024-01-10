import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={path} />;
  }
  return <Component />;
};
