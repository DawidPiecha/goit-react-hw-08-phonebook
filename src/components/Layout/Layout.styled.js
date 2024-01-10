import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100vw;
  overflow-x: auto;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #203a43;
  box-shadow: 0px 4px 8px #2c5364;
  background: linear-gradient(to left, #00416a, #00416a, #e4e5e6);
  width: 100vw;

  > nav {
    display: flex;
    gap: 100px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 18px;
  text-decoration: none;
  color: wheat;
  font-weight: 500;
  font-size: 24px;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    color: white;
    background-color: indigo;
    box-shadow: 0px 0px 30px rgb(12, 12, 10);
  }
`;
