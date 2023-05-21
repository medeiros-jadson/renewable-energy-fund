import React from 'react';
import { translate } from '~/utils';
import {
  BottomText,
  BottomTextWrapper,
  Button,
  Checkbox,
  CheckboxTextWrapper,
  TextInput,
  TextInputWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  goToLogin: () => void;
};

const SignUp: React.FC<Props> = ({ goToLogin }) => (
  <Wrapper showBackButton suppressTitle>
    <Title>{translate('createYourAccount')}</Title>

    <TextInputWrapper>
      <TextInput
        label={translate('firstName')}
        placeholder={translate('firstNamePlaceholder')}
      />
    </TextInputWrapper>

    <TextInputWrapper>
      <TextInput
        label={translate('lastName')}
        placeholder={translate('lastNamePlaceholder')}
      />
    </TextInputWrapper>

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

    <Checkbox
      captionComponent={
        <CheckboxTextWrapper>
          <BottomText>{translate('iAmOverEighteen')}</BottomText>
          <BottomText black>{translate('termsOfService')}</BottomText>
          <BottomText>{translate('and')}</BottomText>
          <BottomText black>{translate('privacyPolicy')}</BottomText>
        </CheckboxTextWrapper>
      }
    />

    <Button type="primary" label={translate('createAccount')} />

    <BottomTextWrapper>
      <BottomText>{translate('alreadyHaveAccount')}</BottomText>
      <BottomText black underline onPress={goToLogin}>
        {translate('login')} {translate('here')}
      </BottomText>
    </BottomTextWrapper>
  </Wrapper>
);

export default SignUp;
