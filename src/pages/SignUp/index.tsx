import React from 'react';
import { useNavigation } from '~/core/navigation';
import SignUp from './SignUp';

const SignUpContainer: React.FC = () => {
  const { navigation } = useNavigation();

  const goToLogin = (): void => navigation.goBack();

  return <SignUp goToLogin={goToLogin} />;
};

export default SignUpContainer;
