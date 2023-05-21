import React from 'react';
import { ContentWrapper, Image, More, Text, Title, Wrapper } from './styles';

const ImageCard: React.FC = () => (
  <Wrapper>
    <Image />
    <ContentWrapper>
      <Title />
      <Text>
        Aspira is building a modular, direct air capture system with the energy
        supply integrated into the modules.
      </Text>
      <More>Read More</More>
    </ContentWrapper>
  </Wrapper>
);

export default ImageCard;
