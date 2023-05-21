import React, { FC, useEffect, useState } from 'react';
import {
  Keyboard,
  Platform,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView as Wrapper,
} from 'react-native';

type Behavior = 'height' | 'position' | 'padding' | undefined;

const defaultBehavior: Behavior = Platform.OS === 'ios' ? 'padding' : undefined;
const defaultStyle = { flex: 1 };

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  behavior?: Behavior;
  enabled?: boolean;
  keyboardOffset?: number;
};

const KeyboardAvoidingView: FC<Props> = ({
  style = defaultStyle,
  behavior = defaultBehavior,
  keyboardOffset = 0,
  enabled,
  ...rest
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Wrapper
      style={style}
      behavior={behavior}
      enabled={enabled ?? (Platform.OS === 'ios' ? isKeyboardVisible : true)}
      keyboardVerticalOffset={keyboardOffset}
      {...rest}
    />
  );
};

export default KeyboardAvoidingView;
