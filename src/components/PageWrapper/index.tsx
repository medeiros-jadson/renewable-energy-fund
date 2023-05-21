import React from 'react';
import { ScrollView } from 'react-native';
import { SAFE_AREA_VIEW_EDGES } from '~/utils';
import { PageHeader } from './components';
import { ContentWrapper, Wrapper } from './styles';

type Props = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  suppressTitle?: boolean;
  customHeaderComponent?: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({
  children,
  title = '',
  subtitle = '',
  showBackButton = false,
  suppressTitle = false,
  customHeaderComponent,
}) => (
  <Wrapper edges={[SAFE_AREA_VIEW_EDGES.TOP]}>
    <ScrollView>
      {customHeaderComponent || (
        <PageHeader
          title={title}
          subtitle={subtitle}
          showBackButton={showBackButton}
          suppressTitle={suppressTitle}
        />
      )}
      <ContentWrapper>{children}</ContentWrapper>
    </ScrollView>
  </Wrapper>
);

export default PageWrapper;
