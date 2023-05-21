import { getTheme } from '~/core/theme';
import { styled } from '~/libs';
import IconBase from '../Icon';

type Props = {
  hasBackground?: boolean;
};

const background900 = getTheme('colors.background.900');
const success300 = getTheme('colors.success.300');
const text900 = getTheme('colors.text.900');
const primary100 = getTheme('colors.primary.100');
const primary500 = getTheme('colors.primary.500');
const borderWidthXxs = getTheme('borderWidth.xxs');
const borderRadiusXs = getTheme('borderRadius.xs');
const borderRadiusCircle = getTheme('borderRadius.circle');
const sizingXs = getTheme('sizing.xs');
const sizingSm = getTheme('sizing.sm');
const sizingMd = getTheme('sizing.md');
const sizingXl = getTheme('sizing.xl');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontWeightsSemiBold = getTheme('fontWeights.semiBold');
const fontSizesXxs = getTheme('fontSizes.xxs');
const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesSm = getTheme('fontSizes.sm');
const fontSizesMd = getTheme('fontSizes.md');
const fontSizesXl = getTheme('fontSizes.xl');
const fontSizesXxl = getTheme('fontSizes.xxl');
const fontSizesMax = getTheme('fontSizes.max');

export const Wrapper = styled.View`
  padding: ${sizingMd}px;
  border-bottom-width: ${borderWidthXxs}px;
  border-bottom-color: ${background900};
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.View<Props>`
  width: ${sizingXl}px;
  height: ${sizingXl}px;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadiusCircle}px;
  background-color: ${(props) =>
    props.hasBackground ? background900 : 'transparent'};
`;

export const Icon = styled(IconBase)``;

export const PageTitle = styled.Text`
  text-align: center;
  flex: 1;
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesSm}px;
  line-height: ${fontSizesXl}px;
  color: ${text900};
`;

export const HeadingWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: ${sizingMd}px;
  margin-bottom: ${sizingXl}px;
`;

export const Caption = styled.Text`
  text-align: center;
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesMd}px;
  color: ${text900};
`;

export const SubtitleWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXxl}px;
  line-height: ${fontSizesMax}px;
  color: ${text900};
  margin-right: ${sizingSm}px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesSm}px;
  line-height: ${fontSizesXl}px;
  color: ${success300};
`;

export const Badge = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${sizingSm}px;
  background-color: ${primary100};
  border-radius: ${borderRadiusXs}px;
`;

export const BadgeLabel = styled.Text`
  text-align: center;
  margin-left: ${sizingXs}px;
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXxs}px;
  line-height: ${fontSizesSm}px;
  color: ${primary500};
`;
