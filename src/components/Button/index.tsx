import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Text, Wrapper } from './styles';

type Props = TouchableOpacityProps & {
  type: ButtonType;
  label: string;
};

const Button: React.FC<Props> = ({ type, label, ...rest }) => (
  <Wrapper type={type} {...rest}>
    <Text type={type}>{label}</Text>
  </Wrapper>
);

export default Button;
