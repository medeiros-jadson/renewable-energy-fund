import { Button as ButtonBase } from '~/components';
import { getTheme } from '~/core/theme';
import { getBottomSpace, styled } from '~/libs';

const background300 = getTheme('colors.background.300');
const text500 = getTheme('colors.text.500');
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const borderRadiusXl = getTheme('borderRadius.xl');
const opacityDisabled = getTheme('opacity.disabled');
const opacityOverlay = getTheme('opacity.overlay');

export const Wrapper = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: flex-end;
  padding-horizontal: ${spacingSm}px;
`;

export const Touch = styled.TouchableWithoutFeedback``;

export const RowSubTitle = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  background-color: ${background300};
  padding: ${spacingMd}px;
  padding-bottom: ${(props) => spacingMd(props) + getBottomSpace()}px;
  elevation: 3;
  border-top-left-radius: ${borderRadiusXl}px;
  border-top-right-radius: ${borderRadiusXl}px;
`;

export const Trace = styled.View`
  background-color: ${text500};
  border-radius: ${borderRadiusXl}px;
  opacity: ${opacityDisabled};
  height: 4px;
  width: 48px;
  align-self: center;
  margin-bottom: ${spacingLg}px;
`;

export const ContentTitle = styled.View`
  margin-bottom: ${spacingMd}px;
`;

export const Title = styled.Text`
  opacity: ${opacityOverlay};
  font-weight: bold;
  text-align: center;
  margin-bottom: ${spacingSm}px;
`;

export const Button = styled(ButtonBase)``;
