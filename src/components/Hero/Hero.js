import React from 'react';
import { HeroContainer,HeroTitle,HeroSubtitle,HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Live with Confidence</HeroTitle>
      <HeroSubtitle>Jose Mourinho brings confidence to pan-African Sanlam campaign.</HeroSubtitle>
      <HeroButton>Lets Talk</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
