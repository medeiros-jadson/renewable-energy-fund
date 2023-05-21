import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Box, Icon, Text, Wrapper } from './styles';

type Props = TouchableOpacityProps & {
  checked?: boolean;
  caption?: string;
  captionComponent?: React.ReactNode;
};

const Checkbox: React.FC<Props> = ({
  checked = false,
  caption,
  captionComponent,
  ...rest
}) => {
  return (
    <Wrapper>
      <Box {...rest} checked={checked}>
        {checked && <Icon name="check" />}
      </Box>

      {!captionComponent && <Text>{caption}</Text>}

      {!!captionComponent && captionComponent}
    </Wrapper>
  );
};

export default Checkbox;
