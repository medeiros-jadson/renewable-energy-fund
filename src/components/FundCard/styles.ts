import { getTheme } from '~/core/theme';
import { styled } from '~/libs';
import IconBase from '../Icon';

type Props = {
  hasColor?: boolean;
  type?: 'up' | 'down';
};

const text900 = getTheme('colors.text.900');
const success300 = getTheme('colors.success.300');
const danger300 = getTheme('colors.danger.300');
const background100 = getTheme('colors.background.100');
const background900 = getTheme('colors.background.900');
const borderRadiusXs = getTheme('borderRadius.xs');
const borderWidthXxs = getTheme('borderWidth.xxs');
const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesMd = getTheme('fontSizes.md');
const fontWeightsSemiBold = getTheme('fontWeights.semiBold');
const spacingSm = getTheme('spacing.sm');
const spacingLg = getTheme('spacing.lg');

export const Wrapper = styled.TouchableOpacity`
  background-color: ${background100};
  width: 140px;
  height: 145px;
  border: ${borderWidthXxs}px solid ${background900};
  border-radius: ${borderRadiusXs}px;
  padding: ${fontSizesXs}px;
  flex-direction: column;
`;

export const Icon = styled(IconBase).attrs({ touchable: false })``;

export const Title = styled.Text`
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesMd}px;
  color: ${text900};
  margin-top: ${spacingSm}px;
  margin-bottom: ${spacingLg}px;
`;

export const InfoWrapper = styled.View`
  margin-top: ${spacingLg}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.Text<Props>`
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesMd}px;
  color: ${(props) =>
    props.hasColor ? (props.type === 'up' ? success300 : danger300) : text900};
`;
