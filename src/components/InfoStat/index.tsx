import React from 'react';
import { Icon, Text, Wrapper } from './styles';

type Props = {
  label: string;
  caption: string;
};

const InfoStat: React.FC<Props> = ({ label, caption }) => (
  <Wrapper>
    <Text>
      {label}
      <Icon name="info" />
    </Text>
    <Text black>{caption}</Text>
  </Wrapper>
);

export default InfoStat;
