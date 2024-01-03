import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { Logo } from '@shared/ui/Logo';

export const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{flexGrow: 1}}>
            <Logo />
          </div>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
