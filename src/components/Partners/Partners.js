import React from 'react';
import partners from '../../assets/partners.json';
import { Wrapper,HeadingWrapper,Line,Title,Description,PartnerImage } from './PartnersStyles';

const Partners = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Line />
        <Title>You'll be in good company</Title>
      </HeadingWrapper>
      <Description>Trusted by leading brands</Description>
      <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'center'}}>
        {partners.map((partner, index) => (
          <PartnerImage key={index} src={partner.src} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Partners;
