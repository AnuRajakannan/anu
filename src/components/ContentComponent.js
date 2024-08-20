//content.js

import React from 'react';
import { Content, Image, TypographyText } from './StyledComponents';
import imagePath from '../assets/successImage.png'; // Replace this with your image path

const ContentComponent = () => {
  return (
    <Content>
      <Image src={imagePath} alt="Celebration" />
      <TypographyText variant="h5">Your Account is created successfully.</TypographyText>
      <TypographyText variant="subtitle1">Please wait for approval.</TypographyText>
    </Content>
  );
};

export default ContentComponent;
