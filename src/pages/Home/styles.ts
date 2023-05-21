import { HomeHeader, PageWrapper } from '~/components';
import { getTheme } from '~/core/theme';
import { styled } from '~/libs';
import { illustration } from '~/utils';

const text100 = getTheme('colors.text.100');
const text900 = getTheme('colors.text.900');
const primary500 = getTheme('colors.primary.500');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontWeightsSemiBold = getTheme('fontWeights.semiBold');
const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesMd = getTheme('fontSizes.md');
const fontSizesXl = getTheme('fontSizes.xl');
const fontSizesXxl = getTheme('fontSizes.xxl');
const spacingMd = getTheme('spacing.md');
const spacingXl = getTheme('spacing.xl');
const borderRadiusLg = getTheme('borderRadius.lg');

export const Wrapper = styled(PageWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Header = styled(HomeHeader)``;

export const FundsSection = styled.View`
  flex-direction: column;
  margin-top: ${spacingXl}px;
  margin-left: ${spacingXl}px;
  margin-bottom: ${spacingXl}px;
`;

export const FundsTitle = styled.Text`
  color: ${text900};
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXl}px;
  line-height: ${fontSizesXxl}px;
  margin-bottom: ${spacingXl}px;
`;

export const FundsCardWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: 15,
  },
})``;

export const Banner = styled.View`
  margin: 0 ${spacingXl}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${primary500};
  border-radius: ${borderRadiusLg}px;
  padding: ${spacingXl}px;
`;

export const BannerContentWrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const BannerTitle = styled.Text`
  color: ${text100};
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesMd}px;
  line-height: ${fontSizesXl}px;
  margin-bottom: ${spacingMd}px;
`;

export const BannerSubtitle = styled.Text`
  color: ${text100};
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesMd}px;
`;

export const BannerImage = styled.Image.attrs({
  source: illustration,
})`
  height: 87px;
  width: 94px;
`;
