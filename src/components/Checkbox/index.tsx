import React from 'react';
import { Box, Icon, Text, Wrapper } from './styles';

type Props = {
  checked?: boolean;
  caption?: string;
  captionComponent?: React.ReactNode;
};

const Checkbox: React.FC<Props> = ({
  checked = false,
  caption,
  captionComponent,
}) => {
  return (
    <Wrapper>
      <Box checked={checked}>{checked && <Icon name="check" />}</Box>

      {!captionComponent && <Text>{caption}</Text>}

      {!!captionComponent && captionComponent}
    </Wrapper>
  );
};

export default Checkbox;
