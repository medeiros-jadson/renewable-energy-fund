import React from 'react';
import { FundCard } from '~/components';
import {
  Banner,
  BannerContentWrapper,
  BannerImage,
  BannerSubtitle,
  BannerTitle,
  FundsCardWrapper,
  FundsSection,
  FundsTitle,
  Header,
  Wrapper,
} from './styles';

type Props = {
  onFundPress: () => void;
};

const Home: React.FC<Props> = ({ onFundPress }) => {
  const getHeader = (): JSX.Element => <Header />;

  return (
    <Wrapper customHeaderComponent={getHeader()}>
      <FundsSection>
        <FundsTitle>Funds</FundsTitle>
        <FundsCardWrapper>
          <FundCard
            icon="wind"
            graph="windGraph"
            title="Wind Fund"
            price="$1032.23"
            percent="3.51%"
            type="up"
            onPress={onFundPress}
          />
          <FundCard
            icon="sun"
            graph="sunGraph"
            title="Solar Fund"
            price="$986.61"
            percent="0.13%"
            type="down"
            onPress={onFundPress}
          />
          <FundCard
            icon="leaf"
            graph="grassGraph"
            title="Nature Fund"
            price="$1122.23"
            percent="5.51%"
            type="up"
            onPress={onFundPress}
          />
        </FundsCardWrapper>
      </FundsSection>

      <Banner>
        <BannerContentWrapper>
          <BannerTitle>Learn more about carbon credits</BannerTitle>
          <BannerSubtitle>Check out our top tips!</BannerSubtitle>
        </BannerContentWrapper>
        <BannerImage />
      </Banner>
    </Wrapper>
  );
};

export default Home;
