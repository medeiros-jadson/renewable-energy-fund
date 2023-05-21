import React, { useCallback, useState } from 'react';
import { FormContainer } from '~/components';
import { useNavigation } from '~/core/navigation';
import { useAppDispatch } from '~/core/stores';
import { registerUser } from '~/core/stores/user/thunks';
import { translate } from '~/utils';
import { FormValues, initialValues, validationSchema } from './form';
import SignUp from './SignUp';

const SignUpContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigation, modals, routes } = useNavigation();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const goToLogin = (): void => navigation.goBack();

  const handleMarkCheckbox = (): void =>
    setIsCheckboxChecked((prevState) => !prevState);

  const onSubmit = useCallback(
    async (values: FormValues): Promise<void> => {
      await dispatch(
        registerUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          isOverEighteen: isCheckboxChecked,
        }),
      );

      navigation.navigate(modals.DEFAULT, {
        title: translate('registrationMadeSuccessfully'),
        okText: translate('ok'),
        onPressOk: () => {
          navigation.goBack();
          navigation.replace(routes.SIGN_IN);
        },
      });
    },
    [isCheckboxChecked, dispatch, modals, routes, navigation],
  );

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
