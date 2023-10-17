import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-top: 16px;
  background-color: #70259B;
  color: white;
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
  margin-top:50px;
`;

export const Line = styled.div`
  width: 50px;
  height: 10px;
  background-color: #D100C9;
  margin-right: 16px;
  margin-top: 20px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  
`;

export const Title = styled.h5`
  font-weight: normal;
  font-size: 30px;
  padding: 0px;
  margin:0px;
  margin-top: 20px;
`;

export const ContactLinks = styled.div`
  display: grid;
  padding: 80px 0 50px 0;
  @media screen and (max-width:768px)
  {
    display:none;
  }
`;
export const ContactInfo = styled.div`
  display: grid;
  @media screen and (max-width:768px)
  {
    display:none;
  }
`;
export const MobileView =styled.div`
  display:none;
  @media screen and (max-width:768px)
  {
    display:block;
  }

`;