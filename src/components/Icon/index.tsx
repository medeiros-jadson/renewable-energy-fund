import React, { FC } from 'react';
import Icon, { IconType } from './Icon';

const IconContainer: FC<IconType> = ({ ...rest }) => <Icon {...rest} />;

export default IconContainer;
