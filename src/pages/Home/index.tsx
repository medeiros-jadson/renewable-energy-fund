import React from 'react';
import { useNavigation } from '~/core/navigation';
import Home from './Home';

const HomeContainer: React.FC = () => {
  const { navigation, routes } = useNavigation();

  const onFundPress = (): void => navigation.navigate(routes.FUND_DETAILS);

  return <Home onFundPress={onFundPress} />;
};

export default HomeContainer;
