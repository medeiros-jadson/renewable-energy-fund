import React, { FC, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '~/core/navigation/hooks';
import Modal from './Modal';

const ModalContainer: FC = () => {
  const { navigation } = useNavigation();
  const { params } = useRoute();

  const { onPressOk } = params as ModalParams;

  const [isMounted, setIsMounted] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (): Promise<void> => {
    if (!!onPressOk) {
      try {
        setLoading(true);
        await onPressOk();
      } finally {
        if (isMounted) setLoading(false);
      }
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <Modal
      loading={loading}
      alertData={params}
      goBack={navigation.goBack}
      onPressOk={handleConfirm}
    />
  );
};

export default ModalContainer;
