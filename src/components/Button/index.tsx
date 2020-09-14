import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './style';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
