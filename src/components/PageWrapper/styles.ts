import { getTheme } from '~/core/theme';
import { SafeAreaView as SafeAreaViewBase, styled } from '~/libs';

type Props = {
  fullWidth?: boolean;
};

const spacingXl = getTheme('spacing.xl');

export const Wrapper = styled(SafeAreaViewBase)`
  flex: 1;
  background-color: 'transparent';
`;

export const ContentWrapper = styled.View<Props>`
  padding: ${(props) => (props.fullWidth ? 0 : spacingXl)}px;
  flex: 1;
`;
