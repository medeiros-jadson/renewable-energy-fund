import { PageWrapper } from '~/components';
import { getTheme } from '~/core/theme';
import { styled } from '~/libs';

const primary500 = getTheme('colors.primary.500');

export const Wrapper = styled(PageWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: normal;
  text-align: center;
  color: ${primary500};
`;
