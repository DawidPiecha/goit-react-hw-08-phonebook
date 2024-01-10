import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import icon from 'components/icon.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const AuthorizedNav = () => {
    return (
      <nav>
        <Link to="/" end>
          <svg width="40" height="40">
            <use href={icon + '#phonebook'}></use>
          </svg>
          Home
        </Link>

        <Link to="/contacts">Contacts</Link>
        <UserMenu />
      </nav>
    );
  };
  const UnauthorizedNav = () => {
    return (
      <nav>
        <Link to="/" end>
          <svg width="40" height="40">
            <use href={icon + '#phonebook'}></use>
          </svg>
          Home
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    );
  };
  return (
    <Container>
      <Header>{isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}</Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
