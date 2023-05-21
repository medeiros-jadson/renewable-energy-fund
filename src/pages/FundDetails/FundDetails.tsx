import React from 'react';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { ImageCard } from '~/components';
import { themeSelector } from '~/core/stores/theme/selectors';
import {
  BreakdownSection,
  BreakdownTitle,
  Button,
  DisclaimerWrapper,
  HorizontalScrollWrapper,
  Icon,
  InfoData,
  InfoSection,
  InfoWrapper,
  PortifolioSection,
  PortifolioTitle,
  PortifolioTitleWrapper,
  SectionTitle,
  Subtitle,
  SubtitleWrapper,
  TimeIndicator,
  TimeWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './styles';

const FundDetails: React.FC = () => {
  const { theme } = useSelector(themeSelector);
  const { success } = theme.colors;

  return (
    <Wrapper title="Wind Fund" subtitle="WFND" showBackButton fullWidth>
      <TitleWrapper>
        <Title>$18.23</Title>

        <Title>2022</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>
          <Icon name="arrowUpInclineLeft" color={success[300]} />
          3.51% ($1.21)
        </Subtitle>
      </SubtitleWrapper>

      <Icon
        name="largeGraph"
        touchable={false}
        width={Dimensions.get('screen').width}
      />

      <TimeWrapper>
        <TimeIndicator>1h</TimeIndicator>
        <TimeIndicator isActive>1d</TimeIndicator>
        <TimeIndicator>1w</TimeIndicator>
        <TimeIndicator>1m</TimeIndicator>
        <TimeIndicator>1y</TimeIndicator>
        <TimeIndicator>All</TimeIndicator>
      </TimeWrapper>

      <InfoSection>
        <SectionTitle>Info & Stats</SectionTitle>
        <InfoWrapper>
          <InfoData label="AUM" caption="$430.88m" />
          <InfoData label="Issue Date" caption="18/04/2022" />
        </InfoWrapper>
        <InfoWrapper>
          <InfoData label="Vintage Range" caption="2019 – 2022" />
          <InfoData label="TER" caption="0.15%" />
        </InfoWrapper>
        <InfoWrapper>
          <InfoData label="Price at Close" caption="$17.68" />
          <InfoData label="Price at Open" caption="$17.74" />
        </InfoWrapper>
      </InfoSection>

      <BreakdownSection>
        <SectionTitle>Fund Breakdown</SectionTitle>
        <HorizontalScrollWrapper>
          <BreakdownTitle isActive>Highlighted</BreakdownTitle>
          <BreakdownTitle>Value</BreakdownTitle>
          <BreakdownTitle>Vintage</BreakdownTitle>
          <BreakdownTitle>Registry</BreakdownTitle>
        </HorizontalScrollWrapper>
        <HorizontalScrollWrapper>
          <ImageCard />
          <ImageCard />
        </HorizontalScrollWrapper>
      </BreakdownSection>

      <PortifolioSection>
        <PortifolioTitleWrapper>
          <Icon name="pie" />
          <PortifolioTitle>Your Portfolio</PortifolioTitle>
        </PortifolioTitleWrapper>
        <TitleWrapper>
          <Title>18 credits</Title>

          <Title>$328.14</Title>
        </TitleWrapper>
        <SubtitleWrapper>
          <Subtitle>
            <Icon name="arrowUpInclineLeft" color={success[300]} />
            8.41%
          </Subtitle>

          <Subtitle isGrey>Last purchase 28d ago</Subtitle>
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Button type="flat" label="Sell" />
          <Button type="secondary" label="Retire credits" />
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle isGrey>
            You’ve previously retired 28 credits of this asset
          </Subtitle>
        </SubtitleWrapper>
      </PortifolioSection>

      <DisclaimerWrapper>
        <Subtitle isGrey>
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order.
        </Subtitle>
        <Subtitle isGrey>
          The information provided is not investment advice, and should not be
          used as a recommendation to buy or sell assets.
        </Subtitle>
      </DisclaimerWrapper>

      <SubtitleWrapper>
        <Button type="primary" label="Buy" />
      </SubtitleWrapper>
    </Wrapper>
  );
};

export default FundDetails;
