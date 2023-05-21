import React from 'react';
import {
  ContentWrapper,
  Icon,
  IconWrapper,
  Subtitle,
  SuppressBadge,
  SuppressWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  subtitle: string;
  showBackButton: boolean;
  suppressTitle: boolean;
};

const PageHeader: React.FC<Props> = ({
  title,
  subtitle,
  showBackButton,
  suppressTitle,
}) => (
  <Wrapper>
    <IconWrapper>{showBackButton && <Icon name="arrowLeft" />}</IconWrapper>

    {suppressTitle && (
      <SuppressWrapper>
        <SuppressBadge />
        <SuppressBadge />
        <SuppressBadge />
      </SuppressWrapper>
    )}

    {!suppressTitle && (
      <ContentWrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </ContentWrapper>
    )}

    <IconWrapper />
  </Wrapper>
);

export default PageHeader;
