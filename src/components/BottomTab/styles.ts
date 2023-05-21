import { getTheme } from '~/core/theme';
import { SafeAreaView as SafeAreaViewComponent, styled } from '~/libs';
import IconBase from '../Icon';

type Props = {
  isCurrentTab?: boolean;
};

const fontWeightsRegular = getTheme('fontWeights.regular');
const fontSizesMin = getTheme('fontSizes.min');
const fontSizesSm = getTheme('fontSizes.sm');
const primary500 = getTheme('colors.primary.500');
const background100 = getTheme('colors.background.100');
const background900 = getTheme('colors.background.900');
const text900 = getTheme('colors.text.900');
const borderWidthXxs = getTheme('borderWidth.xxs');
const sizingMd = getTheme('sizing.md');
const spacingSm = getTheme('spacing.sm');
const spacingLg = getTheme('spacing.lg');

export const SafeAreaView = styled(SafeAreaViewComponent)`
  background-color: ${background100};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-top-color: ${background900};
  border-top-width: ${borderWidthXxs}px;
  background-color: ${background100};
  padding: 0 ${spacingLg}px;
`;

export const TouchableWrapper = styled.TouchableOpacity``;

export const TouchableContentWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${sizingMd}px;
`;

export const Label = styled.Text<Props>`
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesMin}px;
  line-height: ${fontSizesSm}px;
  margin-top: ${spacingSm}px;
  color: ${(props) => (props.isCurrentTab ? primary500 : text900)};
`;

export const Icon = styled(IconBase).attrs((props: any) => ({
  touchable: false,
  color: props.isCurrentTab ? primary500(props) : text900(props),
}))<Props>``;
