import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: 90dvh;
  background: url('/confidence.jpeg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  @media screen and (max-width:1200px)
  {
    margin-bottom:0;
    margin-left:0;
    
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 50px;
  margin-bottom: 4px;
  margin-left:70px;
  @media screen and (max-width:1200px)
  {
    margin-bottom:0;
    margin:0 20px;
    font-size:40px;
    color: white;
  }
  
`;

export const HeroSubtitle = styled.h4`
  color: white;
  font-size: x-large;
  margin-bottom: 10px;
  margin-left:70px;
  @media screen and (max-width:1200px)
  {
    margin-bottom:0;
    margin:20px;
    padding:0;
    font-size:20px;
  }
`;

export const HeroButton = styled.button`
  background-color: #70259B;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom:300px;
  margin-left:70px;
  @media screen and (max-width:1200px)
  {
    margin-bottom:20px;
    margin-left:20px;
  }
`;