//header.js

import React from 'react';
import { Header, IconContainer, Icon } from './StyledComponents';
import headericon1 from '../assets/icon2.png';
import headericon2 from '../assets/icon3.png';

const HeaderComponent = () => {
  return (
    <Header>
      <IconContainer>
        <Icon src={headericon2} alt="User" />
        <Icon src={headericon1} alt="Notification" />
      </IconContainer>
    </Header>
  );
};

export default HeaderComponent;
