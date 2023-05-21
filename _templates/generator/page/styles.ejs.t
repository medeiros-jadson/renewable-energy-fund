---
to: src/pages/<%= h.changeCase.pascal(name) %>/styles.ts
---
import { getTheme } from '~/core/theme';
import { styled } from '~/libs';

const primary500 = getTheme('colors.primary.500');

export const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Tilte = styled.Text`
  font-weight: normal;
  text-align: center;
  color: ${primary500};
`;
