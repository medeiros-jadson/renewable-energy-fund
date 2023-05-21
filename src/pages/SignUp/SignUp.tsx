import React from 'react';
import { FormikProps, useFormikContext } from '~/libs';
import { translate } from '~/utils';
import { FormValues } from './form';
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
  isCheckboxChecked: boolean;
  goToLogin: () => void;
  handleMarkCheckbox: () => void;
};

const SignUp: React.FC<Props> = ({
  isCheckboxChecked,
  handleMarkCheckbox,
  goToLogin,
}) => {
  const { values, submitForm, handleChange, errors }: FormikProps<FormValues> =
    useFormikContext();

  return (
    <Wrapper showBackButton suppressTitle>
      <Title>{translate('createYourAccount')}</Title>

      <TextInputWrapper>
        <TextInput
          label={translate('firstName')}
          placeholder={translate('firstNamePlaceholder')}
          value={values.firstName}
          onChangeText={handleChange('firstName')}
        />
        {!!errors.firstName && <BottomText red>{errors.firstName}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('lastName')}
          placeholder={translate('lastNamePlaceholder')}
          value={values.lastName}
          onChangeText={handleChange('lastName')}
        />
        {!!errors.lastName && <BottomText red>{errors.lastName}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('email')}
          placeholder={translate('emailPlaceholder')}
          value={values.email}
          onChangeText={handleChange('email')}
        />
        {!!errors.email && <BottomText red>{errors.email}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('password')}
          placeholder={translate('passwordPlaceholder')}
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry
        />
        {!!errors.password && <BottomText red>{errors.password}</BottomText>}
      </TextInputWrapper>

      <Checkbox
        checked={isCheckboxChecked}
        onPress={handleMarkCheckbox}
        captionComponent={
          <CheckboxTextWrapper>
            <BottomText>{translate('iAmOverEighteen')}</BottomText>
            <BottomText black>{translate('termsOfService')}</BottomText>
            <BottomText>{translate('and')}</BottomText>
            <BottomText black>{translate('privacyPolicy')}</BottomText>
          </CheckboxTextWrapper>
        }
      />

      <Button
        type="primary"
        disabled={!isCheckboxChecked}
        label={translate('createAccount')}
        onPress={submitForm}
      />

      <BottomTextWrapper>
        <BottomText>{translate('alreadyHaveAccount')}</BottomText>
        <BottomText black underline onPress={goToLogin}>
          {translate('login')} {translate('here')}
        </BottomText>
      </BottomTextWrapper>
    </Wrapper>
  );
};

export default SignUp;
