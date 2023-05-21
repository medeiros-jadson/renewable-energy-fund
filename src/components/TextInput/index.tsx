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
        <Input autoCapitalize="none" secureTextEntry={isPassword} {...rest} />

        {secureTextEntry && (
          <Icon
            name={isPassword ? 'eye' : 'eyeSlash'}
            onPress={handleToggleContentVisibility}
          />
        )}
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInput;
