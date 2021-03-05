import React from 'react';
import * as MaterialIcons from '@material-ui/icons';
import MaterialIcon from '@material-ui/core/Icon';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

import { Colors } from '../../../modules/colors';
import { IconSize } from '../../../modules/variables';
export interface IconProps {
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
  name: string;
  onPress?: () => void | Function;
  set?: 'assets' | 'downloading' | 'material';
  stroke?: string;
  strokeWidth?: string | number;
  text?: string;
}

const pascalCase = (name: string) => upperFirst(camelCase(name));

export const Icon = ({ color = Colors.black, size = IconSize.base, 
  name, ...rest}: IconProps) => {
  const normalizedName = pascalCase(name) as keyof typeof MaterialIcons;
  const IconComponent = MaterialIcons[normalizedName] as typeof MaterialIcon;

  return <IconComponent {...rest} style={{ color, fontSize: `${size}pt` }} />;
};

Icon.defaultProps = {
  set: 'material'
};

export default Icon;