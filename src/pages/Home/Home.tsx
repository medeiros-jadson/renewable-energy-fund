import React from 'react';
import { Header, Title, Wrapper } from './styles';

const Home: React.FC = () => {
  const getHeader = (): JSX.Element => <Header />;

  return (
    <Wrapper customHeaderComponent={getHeader()}>
      <Title>Home</Title>
    </Wrapper>
  );
};

export default Home;
