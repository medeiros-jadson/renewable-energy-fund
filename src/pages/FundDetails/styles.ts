import {
  Button as ButtonBase,
  Icon as IconBase,
  InfoStat,
  PageWrapper,
} from '~/components';
import { getTheme } from '~/core/theme';
import { styled } from '~/libs';

type Props = {
  isActive?: boolean;
  isGrey?: boolean;
};

const text500 = getTheme('colors.text.500');
const text900 = getTheme('colors.text.900');
const success300 = getTheme('colors.success.300');
const primary100 = getTheme('colors.primary.100');
const primary500 = getTheme('colors.primary.500');
const background100 = getTheme('colors.background.100');
const background900 = getTheme('colors.background.900');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontWeightsSemiBold = getTheme('fontWeights.semiBold');
const borderRadiusXs = getTheme('borderRadius.xs');
const sizingXs = getTheme('sizing.xs');
const sizingSm = getTheme('sizing.sm');
const spacingMd = getTheme('spacing.md');
const spacingXl = getTheme('spacing.xl');
const fontSizesXxs = getTheme('fontSizes.xxs');
const fontSizesSm = getTheme('fontSizes.sm');
const fontSizesXl = getTheme('fontSizes.xl');
const fontSizesXxl = getTheme('fontSizes.xxl');
const fontSizesMax = getTheme('fontSizes.max');

export const Wrapper = styled(PageWrapper)`
  justify-content: center;
  flex: 1;
`;

export const TitleWrapper = styled.View`
  margin: ${spacingXl}px ${spacingXl}px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXxl}px;
  line-height: ${fontSizesMax}px;
  color: ${text900};
`;

export const SubtitleWrapper = styled.View`
  margin: ${sizingXs}px ${spacingXl}px ${spacingXl}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Subtitle = styled.Text<Props>`
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesSm}px;
  line-height: ${fontSizesXl}px;
  color: ${(props) => (props.isGrey ? text500 : success300)};
`;

export const Icon = styled(IconBase)``;

export const TimeWrapper = styled.View`
  margin: ${spacingXl}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TimeIndicator = styled.Text<Props>`
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${sizingSm}px;
  background-color: ${(props) => (props.isActive ? primary100 : background100)};
  border-radius: ${borderRadiusXs}px;
  color: ${(props) => (props.isActive ? primary500 : text500)};
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXxs}px;
  line-height: ${fontSizesSm}px;
`;

export const InfoSection = styled.View`
  flex-direction: column;
  margin: ${spacingXl}px;
`;

export const SectionTitle = styled.Text`
  color: ${text900};
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXl}px;
  line-height: ${fontSizesXxl}px;
  margin-bottom: ${spacingXl}px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  margin-bottom: ${spacingMd}px;
`;

export const InfoData = styled(InfoStat)``;

export const HorizontalScrollWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: 15,
  },
})``;

export const BreakdownSection = styled.View`
  flex-direction: column;
  margin: ${spacingXl}px;
`;

export const BreakdownTitle = styled.Text<Props>`
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesSm}px;
  line-height: ${fontSizesXl}px;
  color: ${(props) => (props.isActive ? text900 : text500)};
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
  text-decoration-color: ${(props) =>
    props.isActive ? primary500 : 'transparent'};
  margin-bottom: ${spacingMd}px;
`;

export const PortifolioSection = styled.View`
  flex-direction: column;
`;

export const PortifolioTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 ${spacingXl}px;
`;

export const PortifolioTitle = styled.Text`
  color: ${text900};
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXl}px;
  line-height: ${fontSizesXxl}px;
  margin-left: 4px;
`;

export const Button = styled(ButtonBase)`
  flex: 1;
`;

export const DisclaimerWrapper = styled.View`
  padding: 8px;
  margin: ${spacingXl}px;
  background-color: ${background900};
  gap: 16px;
  border-radius: ${borderRadiusXs}px;
`;
