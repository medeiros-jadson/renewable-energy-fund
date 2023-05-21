import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { FormBehavior } from '~/libs';
import { Wrapper } from './styles';

type Props = {
  children: React.ReactNode;
  validationSchema: any;
  initialValues: Record<string, unknown>;
  onSubmit(values: any, actions: any): any;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  enableReinitialize?: boolean;
  style?: StyleProp<ViewStyle>;
  enableKeyboardAvoidView?: boolean;
};

const FormContainer: React.FC<Props> = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
  validateOnChange = false,
  validateOnBlur = false,
  enableReinitialize = false,
  enableKeyboardAvoidView,
  style = [{}],
}) => {
  return (
    <Wrapper style={style} enabled={enableKeyboardAvoidView}>
      <FormBehavior
        enableReinitialize={enableReinitialize}
        validateOnChange={validateOnChange}
        validateOnBlur={validateOnBlur}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {children}
      </FormBehavior>
    </Wrapper>
  );
};

export default FormContainer;
