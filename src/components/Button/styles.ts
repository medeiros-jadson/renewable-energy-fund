import { getTheme } from '~/core/theme';
import { styled } from '~/libs';

type Props = {
  type?: ButtonType;
};

const sizingMd = getTheme('sizing.md');
const background100 = getTheme('colors.background.100');
const primary500 = getTheme('colors.primary.500');
const success300 = getTheme('colors.success.300');
const text100 = getTheme('colors.text.100');
const text300 = getTheme('colors.text.300');
const borderWidthXxs = getTheme('borderWidth.xxs');
const borderRadiusXs = getTheme('borderRadius.xs');
const fontWeightsMedium = getTheme('fontWeights.medium');
const fontSizesMd = getTheme('fontSizes.md');
const fontSizesXl = getTheme('fontSizes.xl');
const opacityDisabled = getTheme('opacity.disabled');
const opacityOpaque = getTheme('opacity.opaque');

const background = {
  primary: primary500,
  secondary: success300,
  flat: background100,
};

const text = {
  primary: text100,
  secondary: text100,
  flat: primary500,
};

const border = {
  primary: primary500,
  secondary: success300,
  flat: text300,
};

export const Wrapper = styled.TouchableOpacity<Props>`
  padding: ${sizingMd}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => background[props.type!]};
  border: ${borderWidthXxs}px solid ${(props) => border[props.type!]};
  border-radius: ${borderRadiusXs}px;
  opacity: ${(props) => (props.disabled ? opacityDisabled : opacityOpaque)};
`;

export const Text = styled.Text<Props>`
  color: ${(props) => text[props.type!]};
  font-weight: ${fontWeightsMedium};
  font-size: ${fontSizesMd}px;
  line-height: ${fontSizesXl}px;
`;
