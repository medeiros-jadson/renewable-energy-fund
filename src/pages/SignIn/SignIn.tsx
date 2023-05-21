import React from 'react';
import { FormikProps, useFormikContext } from '~/libs';
import { translate } from '~/utils';
import { FormValues } from './form';
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

const SignIn: React.FC<Props> = ({ goToSignUp }) => {
  const { values, submitForm, handleChange, errors }: FormikProps<FormValues> =
    useFormikContext();

  return (
    <Wrapper>
      <Title>{translate('login')}</Title>

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
          secureTextEntry
          value={values.password}
          onChangeText={handleChange('password')}
        />
        {!!errors.password && <BottomText red>{errors.password}</BottomText>}
      </TextInputWrapper>

      <Button type="primary" label={translate('login')} onPress={submitForm} />

      <BottomTextWrapper>
        <BottomText>{translate('dontHaveAccount')}</BottomText>
        <BottomText underline onPress={goToSignUp}>
          {translate('signUp')}
        </BottomText>
        <BottomText>{translate('here')}</BottomText>
      </BottomTextWrapper>
    </Wrapper>
  );
};

export default SignIn;
