import React from 'react';
import { FormContainer } from '~/components';
import { useNavigation } from '~/core/navigation';
import { FormValues, initialValues, validationSchema } from './form';
import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const { navigation, routes } = useNavigation();

  const goToSignUp = (): void => navigation.navigate(routes.SIGN_UP);

  const onSubmit = (values: FormValues): void => {
    console.log(values);
  };

  return (
    <FormContainer
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <SignIn goToSignUp={goToSignUp} />
    </FormContainer>
  );
};

export default SignInContainer;
