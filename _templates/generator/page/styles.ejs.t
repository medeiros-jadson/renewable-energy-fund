---
to: src/pages/<%= h.changeCase.pascal(name) %>/styles.ts
---
import { styled } from '~/libs';

export const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Tilte = styled.Text`
  font-weight: normal;
  text-align: center;
  color: #000000;
`;
