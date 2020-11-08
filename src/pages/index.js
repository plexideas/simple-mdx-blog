import React from 'react'
import { Container, Content, ContentCard } from '../components';
import { FeatureImage } from '../components/FeatureImage';

const IndexPage = () => (
  <Container>
    <FeatureImage />
    <Content>
      <ContentCard
        date="March 22, 2010"
        title="Some text for title"
        excerpt="Some text for excerpt, Some text for excerpt, Some text for excerpt"
        slug="/test"
      />
    </Content>
  </Container>
);

export default IndexPage;
