import React from 'react';
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
    {customHeaderComponent || (
      <PageHeader
        title={title}
        subtitle={subtitle}
        showBackButton={showBackButton}
        suppressTitle={suppressTitle}
      />
    )}
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
);

export default PageWrapper;