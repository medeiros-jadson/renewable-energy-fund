import { getTheme } from '~/core/theme';
import { styled } from '~/libs';
import IconBase from '../Icon';

type Props = {
  black?: boolean;
};

const text500 = getTheme('colors.text.500');
const text900 = getTheme('colors.text.900');
const spacingMd = getTheme('spacing.md');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontSizesSm = getTheme('fontSizes.lg');

export const Wrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Text = styled.Text<Props>`
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesSm}px;
  color: ${(props) => (props.black ? text900 : text500)};
  margin-bottom: ${spacingMd}px;
`;

export const Icon = styled(IconBase).attrs((props) => ({
  color: text500(props),
}))``;
