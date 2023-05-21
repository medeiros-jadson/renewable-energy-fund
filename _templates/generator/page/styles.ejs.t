---
to: src/pages/<%= h.changeCase.pascal(name) %>/styles.ts
---
import { PageWrapper } from '~/components';
import { getTheme } from '~/core/theme';
import { styled } from '~/libs';

const primary500 = getTheme('colors.primary.500');

export const Wrapper = styled(PageWrapper)``;

export const Title = styled.Text`
  font-weight: normal;
  text-align: center;
  color: ${primary500};
`;
