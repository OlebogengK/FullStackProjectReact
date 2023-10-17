import styled from 'styled-components';
export const Wrapper = styled.div`
  padding:0 70px;
  @media screen and (max-width:480px)
  {
    padding:0 20px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
`;

export const Line = styled.div`
  width: 50px;
  height: 10px;
  background-color: #D100C9;
  padding: 0px;
  margin:0px;
`;

export const Title = styled.h5`
  font-weight: normal;
  font-size: 30px;
  padding: 0px;
  margin:0px;
`;