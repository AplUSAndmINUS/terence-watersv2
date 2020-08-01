import React, { ReactNode } from 'react';
import { MuiButton } from '../../theme/material-ui';

interface Props {
  children: ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
