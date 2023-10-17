import React from 'react';
import Service from './Service';
import servicesData from '../../assets/services.json';
import { Wrapper,HeadingWrapper,Line,Title,ServicesDescription,ServicesWrapper } from './ServicesStyles';

const Services = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Line />
        <Title>What we do</Title>
      </HeadingWrapper>
      <ServicesDescription>We offer a complete range of bespoke design and development services to help turn your ideas into digital masterpieces</ServicesDescription>
      <ServicesWrapper>
        {servicesData.map((service, index) => (
          <div>
          <Service key={index} src={service.src} description={service.description} heading={service.heading} />
          </div>
        ))}
      </ServicesWrapper>
    </Wrapper>
  );
};

export default Services;
