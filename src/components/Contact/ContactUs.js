import React from 'react';
import { Wrapper,HeadingWrapper,Line,AddressWrapper,Title,ContactLinks,ContactInfo,MobileView } from './ContactUsStyles';

const ContactUs = () => {
  return (
    <Wrapper id="contact">
      <HeadingWrapper>
        <Line />
        <Title>Contact Us</Title>
      </HeadingWrapper>
      <div className="">
        <ContactInfo>
          <div style={{gridColumnStart:1,gridColumnEnd:9,textAlign:'left'}}>
            <h2 style={{fontSize:'30px'}}>Have a project in mind?</h2>
            <h2 style={{fontSize:'30px'}}>Let's make it happen</h2>
          </div>
          <div style={{gridColumnStart:9,gridColumnEnd:11,textAlign:'left'}}>
          <AddressWrapper>
            <h5 style={{fontSize:'25px',margin:0 ,fontWeight:'normal'}}>22 Street Name, Suburb, 8000, Cape Town, South Africa</h5>
            <h5 style={{fontSize:'25px',margin:'20px 0 0 0',fontWeight:'normal'}}>+27214310001</h5>
            <h5 style={{fontSize:'25px',margin:'20px 0 0 0',fontWeight:'normal'}}>enquire@website.co.za</h5>
          </AddressWrapper>
          </div>
        </ContactInfo>
      </div>
      <ContactLinks>
          <h5 style={{ gridColumnStart: 1,gridColumnEnd:3 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'0'}}>Terms of service</h5>
          <h5 style={{ gridColumnStart: 3,gridColumnEnd:5 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'0'}}>Facebook</h5>
          <h5 style={{ gridColumnStart: 5,gridColumnEnd:7 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'0'}}>Github</h5>
          <h5 style={{ gridColumnStart: 7,gridColumnEnd:9 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'0'}}>Youtube</h5>
          <h5 style={{ gridColumnStart: 9,gridColumnEnd:11 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'0'}}>Explore open jobs</h5>
          <h5 style={{ gridColumnStart: 1,gridColumnEnd:3 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Privacy policy</h5>
          <h5 style={{ gridColumnStart: 3,gridColumnEnd:5 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Instagram</h5>
          <h5 style={{ gridColumnStart: 5,gridColumnEnd:7 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Linkedin</h5>
          <h5 style={{ gridColumnStart: 7,gridColumnEnd:9 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Behance</h5>
          <h5 style={{ gridColumnStart: 1,gridColumnEnd:3 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Impressum</h5>
          <h5 style={{ gridColumnStart: 3,gridColumnEnd:5 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Twitter</h5>
          <h5 style={{ gridColumnStart: 5,gridColumnEnd:7 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Teams</h5>
          <h5 style={{ gridColumnStart: 7,gridColumnEnd:9 ,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Dribble</h5>
          <h5 style={{ gridColumnStart: 9,gridColumnEnd:11,textAlign:'left',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>©2000-2023 Company Name</h5>
        </ContactLinks>
        <MobileView>
          <AddressWrapper>
            <h5 style={{fontSize:'25px',margin:0 ,fontWeight:'normal'}}>22 Street Name, Suburb, 8000, Cape Town, South Africa</h5>
            <h5 style={{fontSize:'25px',margin:'20px 0 0 0',fontWeight:'normal'}}>+27214310001</h5>
            <h5 style={{fontSize:'25px',margin:'20px 0 0 0',fontWeight:'normal'}}>enquire@website.co.za</h5>
          </AddressWrapper>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Terms of service</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Facebook</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Github</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Youtube</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Explore open jobs</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Privacy policy</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Instagram</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Linkedin</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Behance</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Impressum</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Twitter</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Teams</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>Dribble</h5>
          <h5 style={{ textAlign:'center',fontSize:'25px',fontWeight:'normal',margin:'20px 0 0 0'}}>©2000-2023 Company Name</h5>
        </MobileView>
    </Wrapper>
  );
};

export default ContactUs;
