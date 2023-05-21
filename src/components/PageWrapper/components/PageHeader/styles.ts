import { Icon as IconBase } from '~/components';
import { getTheme } from '~/core/theme';
import { styled } from '~/libs';

const sizingSm = getTheme('sizing.sm');
const sizingMd = getTheme('sizing.md');
const sizingLg = getTheme('sizing.lg');
const spacingXxs = getTheme('spacing.xxs');
const spacingXs = getTheme('spacing.xs');
const text700 = getTheme('colors.text.700');
const text900 = getTheme('colors.text.900');
const background900 = getTheme('colors.background.900');
const borderWidthXxs = getTheme('borderWidth.xxs');
const borderRadiusCircle = getTheme('borderRadius.circle');
const fontWeightsSemiBold = getTheme('fontWeights.semiBold');
const fontSizesLg = getTheme('fontSizes.lg');

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${sizingMd}px;
  border-bottom-width: ${borderWidthXxs}px;
  border-bottom-color: ${background900};
`;

export const IconWrapper = styled.View`
  min-width: ${sizingLg}px;
`;

export const Icon = styled(IconBase).attrs((props) => ({
  color: text900(props),
}))``;

export const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesLg}px;
  color: ${text900};
`;

export const Subtitle = styled.Text`
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesLg}px;
  color: ${text700};
`;

export const SuppressWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SuppressBadge = styled.View`
  width: 50px;
  height: ${spacingXs}px;
  margin: ${sizingSm}px ${spacingXxs}px;
  border-radius: ${borderRadiusCircle}px;
  background-color: ${background900};
`;
