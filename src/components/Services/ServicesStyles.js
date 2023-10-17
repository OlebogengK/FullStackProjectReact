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

export const ServicesDescription = styled.h2`
    text-align:left;
    font-size: 50px;
    margin: 50px 0px;
    @media screen and (max-width:768px)
    {
      display:none;
    }
`;
export const ServicesWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
    
`;
export const Card = styled.div`
  width: 300px;
  height: 450px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align:start;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const Heading = styled.h4`
  font-size: xx-large;
  margin-bottom: 6px;
  height:50px
`;

export const Description = styled.h5`
  font-weight: normal;
  font-size: x-large;
  margin-top:60px;
`;