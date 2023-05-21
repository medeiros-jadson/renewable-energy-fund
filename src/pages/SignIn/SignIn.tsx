import React from 'react';
import { translate } from '~/utils';
import {
  BottomText,
  BottomTextWrapper,
  Button,
  TextInput,
  TextInputWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  goToSignUp: () => void;
};

const SignIn: React.FC<Props> = ({ goToSignUp }) => (
  <Wrapper>
    <Title>{translate('login')}</Title>

    <TextInputWrapper>
      <TextInput
        label={translate('email')}
        placeholder={translate('emailPlaceholder')}
      />
    </TextInputWrapper>

    <TextInputWrapper>
      <TextInput
        label={translate('password')}
        placeholder={translate('passwordPlaceholder')}
        secureTextEntry
      />
    </TextInputWrapper>

    <Button type="primary" label={translate('login')} />

    <BottomTextWrapper>
      <BottomText>{translate('dontHaveAccount')}</BottomText>
      <BottomText underline onPress={goToSignUp}>
        {translate('signUp')}
      </BottomText>
      <BottomText>{translate('here')}</BottomText>
    </BottomTextWrapper>
  </Wrapper>
);

export default SignIn;
