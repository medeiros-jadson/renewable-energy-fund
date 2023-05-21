import React, { useCallback } from 'react';
import { FormContainer } from '~/components';
import { useNavigation } from '~/core/navigation';
import { useAppDispatch } from '~/core/stores';
import { auth } from '~/core/stores/user/thunks';
import { translate } from '~/utils';
import { FormValues, initialValues, validationSchema } from './form';
import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigation, routes, modals, stacks } = useNavigation();

  const goToSignUp = (): void => navigation.navigate(routes.SIGN_UP);

  const onSubmit = useCallback(
    async (values: FormValues): Promise<void> => {
      const response = await dispatch(
        auth({
          email: values.email,
          password: values.password,
        }),
      );

      if (!response.payload) {
        navigation.navigate(modals.DEFAULT, {
          title: translate('userNotFound'),
          okText: translate('ok'),
          onPressOk: () => {
            navigation.goBack();
          },
        });
        return;
      }

      navigation.replace(stacks.PRIVATE, {
        screen: routes.HOME,
      });
    },
    [dispatch, modals, routes, navigation, stacks],
  );

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
