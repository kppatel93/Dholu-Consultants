import React from 'react';
import { FooterContainer,
         FooterWrap,
         FooterLinkContainer,
         FooterLinksWrapper,
         FooterLinkItems,
         FooterLinkTitle,
         FooterLink,
         SocialMedia, 
         SocialMediaWrap,
         SocialLogo,
         SocialIcons,
         SocialIconLink,
         WebsiteRight,
         Contacts, } 
from './FooterElements';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };
    return (
        <>
       
        <FooterContainer>
            <FooterWrap>
             <FooterLinkContainer>
                <FooterLinksWrapper>
                 <FooterLinkItems>
                     <FooterLinkTitle> About Us </FooterLinkTitle>
                         <FooterLink to='/signin'>Testimonials</FooterLink>
                         <FooterLink to='/signin'>View Services</FooterLink>
                         <FooterLink to='/signin'>Terms of Service</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                     <FooterLinkTitle> Contact Us </FooterLinkTitle>
                        <Contacts>  Address:- Besides R- World, Opposite to Patidar Water Supply. </Contacts>
                        <Contacts> Mobile:- +91-9727179049</Contacts>
                        <Contacts> Email:- bhavikdholu1990@gmail.com</Contacts>
                 </FooterLinkItems>
                </FooterLinksWrapper>
             </FooterLinkContainer>
             <SocialMedia>
                 <SocialMediaWrap>
                 <SocialLogo to='/' onClick={toggleHome}>
                     Dholu Consultant
                 </SocialLogo>
                        <WebsiteRight> © {new Date().getFullYear()} All rights reserved. </WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                 </SocialMediaWrap>
             </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    );
};

export default Footer;
