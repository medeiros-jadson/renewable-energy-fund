import React from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from '~/core/stores/theme/selectors';
import { Icon, InfoText, InfoWrapper, Title, Wrapper } from './styles';

type Props = {
  icon: keyof SvgSet;
  graph: keyof SvgSet;
  title: string;
  price: string;
  percent: string;
  type: 'up' | 'down';
  onPress?: () => void;
};

const FundCard: React.FC<Props> = ({
  icon,
  graph,
  title,
  price,
  percent,
  type,
  onPress,
}) => {
  const { theme } = useSelector(themeSelector);
  const { success, danger } = theme.colors;

  return (
    <Wrapper onPress={onPress}>
      <Icon name={icon} />
      <Title>{title}</Title>
      <Icon name={graph} />
      <InfoWrapper>
        <InfoText>{price}</InfoText>
        <Icon
          color={type === 'up' ? success[300] : danger[300]}
          name={type === 'up' ? 'arrowUpInclineLeft' : 'arrowDownInclineLeft'}
        />
        <InfoText type={type} hasColor>
          {percent}
        </InfoText>
      </InfoWrapper>
    </Wrapper>
  );
};

export default FundCard;
