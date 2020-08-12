import React from 'react';

export interface Props {
  accessibilityLabel?: string;
  active?: boolean;
  activeFillColor?: string;
  activeStrokeColor?: string;
  children?: React.ReactChild;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  fill?: string;
  height?: string | number;
  width?: string | number;
  size?: string | number;
  name?: string;
  onPress?: () => void | Function;
  set?: 'assets' | 'downloading' | 'material';
  stroke?: string;
  strokeWidth?: string | number;
}

const Icon = (props: Props) => {
  return <div>Icon</div>
};

Icon.defaultProps = {
  set: 'assets'
};

export default Icon;