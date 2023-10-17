import React from 'react';
import Carousel from '../carousel/Carousel';
import { Wrapper, HeadingWrapper,Line,Title} from './CaseStudiesStyles';

const CaseStudies = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Line />
        <Title>Case Studies</Title>
      </HeadingWrapper>
      <Carousel/>
    </Wrapper>
  );
};

export default CaseStudies;
