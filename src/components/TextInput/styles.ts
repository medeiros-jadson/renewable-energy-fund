import { getTheme } from '~/core/theme';
import { styled } from '~/libs';
import IconBase from '../Icon';

const text500 = getTheme('colors.text.500');
const background900 = getTheme('colors.background.900');
const borderRadiusXs = getTheme('borderRadius.xs');
const spacingXs = getTheme('spacing.xs');
const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesSm = getTheme('fontSizes.sm');
const fontWeightsMedium = getTheme('fontWeights.medium');

export const Wrapper = styled.View``;

export const Label = styled.Text`
  margin-bottom: ${spacingXs}px;
  font-weight: ${fontWeightsMedium};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesSm}px;
  color: ${text500};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${spacingLg}px ${spacingMd}px;
  background-color: ${background900};
  border-radius: ${borderRadiusXs}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0;
  margin: 0;
`;

export const Icon = styled(IconBase).attrs((props) => ({
  color: text500(props),
}))``;
