import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #70259B;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  @media screen and (max-width:768px)
  {
    padding: 0 20px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 40px;
  @media screen and (max-width:768px)
  {
    display:none;
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const RouterLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: white; 
  color: #70259B;
  cursor: pointer;
  @media screen and (max-width:768px)
  {
    display:none;
  }
`;

export const Logo = styled.img`
  height: 90px;
  width: 90px;
`;