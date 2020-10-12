import React from 'react';

import { IconSize } from '../../../modules/variables';
import { CircularProgressProps, MuiCircularProgress } from '../../../theme/theme';

const Spinner = (props: CircularProgressProps) => {
  return <MuiCircularProgress {...props} />;
}

Spinner.defaultProps = {
  alt: 'loading',
  color: 'primary',
  size: IconSize.large
}