---
to: src/pages/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from 'react';
import { Tilte, Wrapper } from './styles';

type Props = {};

const <%= h.changeCase.pascal(name) %>: React.FC<Props> = ({}) => (
  <Wrapper>
    <Tilte><%= h.changeCase.pascal(name) %></Tilte>
  </Wrapper>
);

export default <%= h.changeCase.pascal(name) %>;
