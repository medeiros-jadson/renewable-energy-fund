import React from 'react';
import { translate } from '~/utils';
import { Title, Wrapper } from './styles';

const SignIn: React.FC = () => (
  <Wrapper>
    <Title>{translate('signIn')}</Title>
  </Wrapper>
);

export default SignIn;
