import React from 'react';
import { translate } from '~/utils';
import {
  Button,
  Content,
  ContentTitle,
  Title,
  Touch,
  Trace,
  Wrapper,
} from './styles';

type Props = {
  loading: boolean;
  alertData: ModalParams;
  goBack: () => void;
  onPressOk: () => void;
};

const Modal: React.FC<Props> = ({ loading, alertData, goBack, onPressOk }) => {
  const { title, dismiss, loadingText, okText = translate('ok') } = alertData;

  return (
    <Touch onPress={() => dismiss && goBack()}>
      <Wrapper>
        <Touch>
          <Content>
            <Trace />

            <ContentTitle>{title && <Title>{title}</Title>}</ContentTitle>

            <Button
              type="primary"
              label={loading ? loadingText : okText}
              onPress={onPressOk}
            />
          </Content>
        </Touch>
      </Wrapper>
    </Touch>
  );
};

export default Modal;
