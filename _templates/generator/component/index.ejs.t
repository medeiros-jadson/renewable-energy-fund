---
to: src/components/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react';
import { Text, Wrapper } from './styles';

type Props = {}

const <%= h.changeCase.pascal(name) %>: React.FC<Props> = ({}) => (
  <Wrapper>
    <Text><%= h.changeCase.pascal(name) %> component</Text>
  </Wrapper>
);

export default <%= h.changeCase.pascal(name) %>;
