---
to: src/pages/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from 'react';
import { Title, Wrapper } from './styles';

type Props = {};

const <%= h.changeCase.pascal(name) %>: React.FC<Props> = ({}) => (
  <Wrapper>
    <Title><%= h.changeCase.pascal(name) %></Title>
  </Wrapper>
);

export default <%= h.changeCase.pascal(name) %>;
