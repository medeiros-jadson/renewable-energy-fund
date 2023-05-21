import React from 'react';
import { useNavigation } from '~/core/navigation';
import { BottomTabBarProps } from '~/libs';
import { SAFE_AREA_VIEW_EDGES, translate } from '~/utils';
import {
  Icon,
  Label,
  SafeAreaView,
  TouchableContentWrapper,
  TouchableWrapper,
  Wrapper,
} from './styles';

type Props = {
  props: BottomTabBarProps;
};

type Tab = {
  id: number;
  title?: string;
  tabRoute: string;
  icon: keyof SvgSet;
  params?: Record<string, any>;
  onTabPress?: () => void;
};

const BottomTab: React.FC<Props> = ({ props: { state } }) => {
  const { routes, navigation, stacks } = useNavigation();
  const { routeNames, index } = state;

  const Tabs: Tab[] = [
    {
      id: 1,
      title: translate('home'),
      tabRoute: routes.HOME_TAB,
      icon: 'home',
    },
    {
      id: 2,
      title: translate('trade'),
      tabRoute: routes.TRADE_TAB,
      icon: 'trade',
    },
    {
      id: 3,
      title: translate('portifolio'),
      tabRoute: routes.PORTIFOLIO_TAB,
      icon: 'pie',
    },
  ];

  const onPress = (route?: string, params?: Record<string, any>): void => {
    !!route && navigation.replace(stacks.PRIVATE, { screen: route, params });
  };

  return (
    <SafeAreaView edges={[SAFE_AREA_VIEW_EDGES.BOTTOM]}>
      <Wrapper>
        {Tabs.map(({ id, tabRoute, title, icon, params, onTabPress }) => {
          const isFocused = routeNames[index] === tabRoute;
          return (
            <TouchableWrapper
              key={String(id)}
              onPress={onTabPress ?? (() => onPress(tabRoute, params))}
            >
              <TouchableContentWrapper>
                <Icon isCurrentTab={isFocused} name={icon} />
                <Label isCurrentTab={isFocused}>{title}</Label>
              </TouchableContentWrapper>
            </TouchableWrapper>
          );
        })}
      </Wrapper>
    </SafeAreaView>
  );
};

export default BottomTab;
