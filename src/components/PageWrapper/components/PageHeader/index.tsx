import React from 'react';
import { useNavigation } from '~/core/navigation';
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
}) => {
  const { navigation } = useNavigation();

  return (
    <Wrapper>
      <IconWrapper>
        {showBackButton && (
          <Icon name="arrowLeft" onPress={navigation.goBack} />
        )}
      </IconWrapper>

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
};

export default PageHeader;
