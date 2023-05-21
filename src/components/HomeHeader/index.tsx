import React from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from '~/core/stores/theme/slectors';
import {
  Badge,
  BadgeLabel,
  Caption,
  HeaderWrapper,
  HeadingWrapper,
  Icon,
  IconWrapper,
  PageTitle,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './styles';

const HomeHeader: React.FC = () => {
  const { theme } = useSelector(themeSelector);

  const { primary, text, success } = theme.colors;

  return (
    <Wrapper>
      <HeaderWrapper>
        <IconWrapper hasBackground>
          <Icon name="user" color={text[900]} />
        </IconWrapper>
        <PageTitle>
          Account: $1,457.23 <Icon name="chevronDown" color={text[900]} />
        </PageTitle>
        <IconWrapper>
          <Icon name="bell" color={text[900]} />
        </IconWrapper>
      </HeaderWrapper>

      <HeadingWrapper>
        <TitleWrapper>
          <Caption>Portfolio</Caption>
          <SubtitleWrapper>
            <Title>$1,245.23</Title>
            <Icon name="arrowUpInclineLeft" color={success[300]} />
            <Subtitle>31.82%</Subtitle>
          </SubtitleWrapper>
        </TitleWrapper>

        <Badge>
          <Icon name="coin" color={primary[500]} />
          <BadgeLabel>Earn Rewards</BadgeLabel>
        </Badge>
      </HeadingWrapper>
    </Wrapper>
  );
};

export default HomeHeader;
