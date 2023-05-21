import { getTheme } from '~/core/theme';
import { styled } from '~/libs';
import { cardImage, cardTitle } from '~/utils';

const background100 = getTheme('colors.background.100');
const background900 = getTheme('colors.background.900');
const borderRadiusXs = getTheme('borderRadius.xs');
const borderWidthXxs = getTheme('borderWidth.xxs');
const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const text900 = getTheme('colors.text.900');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontSizesSm = getTheme('fontSizes.sm');

export const Wrapper = styled.View`
  overflow: hidden;
  background-color: ${background100};
  width: 220px;
  height: 280px;
  border: ${borderWidthXxs}px solid ${background900};
  border-radius: ${borderRadiusXs}px;
  flex-direction: column;
`;

export const Image = styled.Image.attrs({
  source: cardImage,
})`
  height: 108px;
  width: 220px;
`;

export const ContentWrapper = styled.View`
  padding: ${spacingLg}px;
  background-color: ${background100};
  flex: 1;
`;

export const Title = styled.Image.attrs({
  source: cardTitle,
})`
  width: 80px;
  height: 19px;
  margin-bottom: ${spacingMd}px;
`;

export const Text = styled.Text`
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesSm}px;
  color: ${text900};
`;

export const More = styled.Text`
  margin-top: ${spacingMd}px;
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesSm}px;
  color: ${text900};
  text-decoration: underline;
`;
