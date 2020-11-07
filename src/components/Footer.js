import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { 
  FooterWrapper ,
  FooterSocialWrapper,
  FooterSocialIcons,
} from '../elements';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: {eq: "facebook.svg"}) { publicURL }
      instagram: file(relativePath: {eq: "instagram.svg"}) { publicURL }
      linkedin: file(relativePath: {eq: "linkedin.svg"}) { publicURL }
      twitter: file(relativePath: {eq: "twitter.svg"}) { publicURL }
    }
  `);

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="Facebook Logo"/>
          </a>
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="Linkedin Logo"/>
          </a>
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="Twitter Logo"/>
          </a>
          <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="Instagram Logo"/>
          </a>
        </FooterSocialIcons>
        <p size="xSmall" color="dark3">&#169; 2020 Company. All right reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
