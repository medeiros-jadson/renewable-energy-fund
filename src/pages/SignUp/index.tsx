import React, { useState } from 'react';
import { FormContainer } from '~/components';
import { useNavigation } from '~/core/navigation';
import { FormValues, initialValues, validationSchema } from './form';
import SignUp from './SignUp';

const SignUpContainer: React.FC = () => {
  const { navigation } = useNavigation();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const goToLogin = (): void => navigation.goBack();

  const handleMarkCheckbox = (): void =>
    setIsCheckboxChecked((prevState) => !prevState);

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
      <SignUp
        goToLogin={goToLogin}
        isCheckboxChecked={isCheckboxChecked}
        handleMarkCheckbox={handleMarkCheckbox}
      />
    </FormContainer>
  );
};

export default SignUpContainer;
