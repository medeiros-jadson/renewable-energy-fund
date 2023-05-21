import { getTheme } from '~/core/theme';
import { css, styled } from '~/libs';
import IconBase from '../Icon';

type Props = {
  checked: boolean;
};

const text100 = getTheme('colors.text.100');
const text500 = getTheme('colors.text.500');
const primary500 = getTheme('colors.primary.500');
const background900 = getTheme('colors.background.900');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesMd = getTheme('fontSizes.md');
const spacingMd = getTheme('spacing.md');
const borderWidthSm = getTheme('borderWidth.sm');
const borderRadiusXs = getTheme('borderRadius.xs');

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Box = styled.TouchableOpacity<Props>`
  width: 20px;
  height: 20px;
  border: ${borderWidthSm}px solid ${background900};
  border-radius: ${borderRadiusXs}px;
  margin-right: ${spacingMd}px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${primary500};
    `}
`;

export const Icon = styled(IconBase).attrs((props) => ({
  color: text100(props),
  height: fontSizesXs(props),
}))``;

export const Text = styled.Text`
  color: ${text500};
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesMd}px;
`;
