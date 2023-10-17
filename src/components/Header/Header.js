import React from 'react';
import { HeaderContainer,NavList,NavItem,RouterLink,Button,Logo } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/logo.svg" alt="Logo" />
      </div>
      <div>
        <NavList>
          <NavItem><RouterLink href="/">Services</RouterLink></NavItem>
          <NavItem><RouterLink href="/">Industries</RouterLink></NavItem>
          <NavItem><RouterLink href="/">Cases</RouterLink></NavItem>
          <NavItem><RouterLink href="/">Contact</RouterLink></NavItem>
        </NavList>
      </div>
      <div>
        <Button onClick={() => console.log('Lets Talk clicked')}>Lets Talk</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

