import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Icon, Input, InputWrapper, Label, Wrapper } from './styles';

type Props = {
  label: string;
} & TextInputProps;

const TextInput: React.FC<Props> = ({ label, secureTextEntry, ...rest }) => {
  const [isPassword, setIsPassword] = useState(secureTextEntry);

  const handleToggleContentVisibility = (): void =>
    setIsPassword((prevState) => !prevState);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <Input secureTextEntry={isPassword} {...rest} />

        {secureTextEntry && (
          <Icon name="eye" onPress={handleToggleContentVisibility} />
        )}
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInput;
