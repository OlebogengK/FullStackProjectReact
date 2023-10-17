import React from 'react';
import { Card,Logo,Heading,Description } from './ServicesStyles';

const Service = ({ heading, description, src }) => {
  return (
    <Card>
      <Logo src={src} alt="Logo" />
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </Card>
  );
};

export default Service;
