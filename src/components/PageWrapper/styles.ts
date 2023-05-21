import { getTheme } from '~/core/theme';
import { SafeAreaView as SafeAreaViewBase, styled } from '~/libs';

const spacingXl = getTheme('spacing.xl');

export const Wrapper = styled(SafeAreaViewBase)`
  flex: 1;
  background-color: 'transparent';
`;

export const ContentWrapper = styled.View`
  padding: ${spacingXl}px;
  flex: 1;
`;
