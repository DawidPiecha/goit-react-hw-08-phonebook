import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { currentUser } from '../redux/Auth/operations';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { selectIsRefreshing } from '../redux/Auth/selectors';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={<RestrictedRoute component={Register} path="/contacts" />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} path="/contacts" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} path="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
