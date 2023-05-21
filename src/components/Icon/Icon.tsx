import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { themeSelector } from '~/core/stores/theme/slectors';
import { SvgXml, useSelector } from '~/libs';
import { Wrapper } from './styles';

export type IconType = TouchableOpacityProps & {
  name: keyof SvgSet;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: any;
  borderColor?: string;
  backgroundColor?: string;
  iconSets?: any;
  width?: number;
  height?: number;
};

const Icon: React.FC<IconType> = ({
  name,
  width,
  height,
  color,
  onPress,
  touchable = true,
  ...rest
}) => {
  const { svg } = useSelector(themeSelector);

  const scaledWidth = (): number => {
    if (height) return (height / svg[name].height) * svg[name].width;
    return svg[name].width;
  };

  const scaledHeight = (): number => {
    if (width) return (width / svg[name].width) * svg[name].height;
    return svg[name].height;
  };

  const iconComponent = (): JSX.Element => {
    if (name in svg) {
      return (
        <SvgXml
          fill={color}
          width={width ?? scaledWidth()}
          height={height ?? scaledHeight()}
          xml={svg[name].svg}
        />
      );
    } else {
      return (
        <Icon
          name={name}
          color={color}
          width={width}
          height={height}
          touchable={false}
          {...rest}
        />
      );
    }
  };

  return (
    <Wrapper
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      disabled={!touchable}
      onPress={onPress}
      {...rest}
    >
      {iconComponent()}
    </Wrapper>
  );
};

export default Icon;
