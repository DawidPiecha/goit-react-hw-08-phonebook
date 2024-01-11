import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Auth/operations';
import { Container, WelcomeText, LogoutButton } from './UserMenu.styled';
import { selectUserEmail } from '../../redux/Auth/selectors';
import icon from '../icon.svg';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <Container>
      <WelcomeText>
        <span>Welcome</span> <span>{userEmail}</span>
      </WelcomeText>
      <LogoutButton onClick={handleLogout}>
        <span>Logout</span>
        <svg width="40" height="40">
          <use href={icon + '#exit'}></use>
        </svg>
      </LogoutButton>
    </Container>
  );
};
