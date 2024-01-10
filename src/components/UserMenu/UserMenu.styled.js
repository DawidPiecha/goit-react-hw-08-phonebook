import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 35px;
`;
export const WelcomeText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  color: indigo;
  line-height: 1.5;
  margin: auto;

  text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
    0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  column-gap: 6px;
  color: wheat;
  font-weight: 500;
  font-size: 18px;
  background-color: transparent;
  border-radius: 18px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.05);
    color: white;
    background-color: indigo;
    box-shadow: 0px 0px 30px rgb(12, 12, 10);
  }
`;
