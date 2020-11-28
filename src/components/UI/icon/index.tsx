import React from 'react';
import * as MaterialIcons from '@material-ui/icons';
import MaterialIcon from '@material-ui/core/Icon';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

import svgs from '../../../assets/svgs';
import { ColorsLight } from '../../../modules/colors';
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
  fillColor?: string;
  name: string;
  noWidth?: boolean;
  noHeight?: boolean;
  noSize?: boolean;
  height?: string | number;
  width?: string | number;
  size?: string | number;
  onClick?: () => void | Function;
  onPress?: () => void | Function;
  set?: 'assets' | 'downloading' | 'material';
  stroke?: string;
  strokeColor?: string;
  strokeWidth?: string | number;
  text?: string;
}

const pascalCase = (name: string) => upperFirst(camelCase(name));

export const Icon = (props: IconProps) => {
  const {
    accessibilityLabel,
    children,
    color,
    height,
    name,
    noWidth,
    noHeight,
    noSize,
    set,
    size,
    width,
    ...rest
  } = props;
  const normalizedName = pascalCase(name) as keyof typeof MaterialIcons;
  const IconComponent = MaterialIcons[normalizedName] as typeof MaterialIcon;
  
  const resolveCSSUnit = (value: string | number, unit = 'px'): string | number => {
    const resolved = Number.isNaN(+value) ? value : `${value}${unit}`;
    return typeof document != 'undefined' ? resolved : resolved.toString();
  };

  const optionalDimensions = {
    height: noHeight? null : resolveCSSUnit(height || size || IconSize.base),
    width: noWidth ? null : resolveCSSUnit(width || size || IconSize.base),
    size: noSize ? null : resolveCSSUnit(size || IconSize.base)
  };
  const iconProps = {
    ...optionalDimensions,
    ...rest
  };

  // if (!IconComponent) return null;

  switch (set) {
    case 'assets':
      const iconSet = svgs({ ...iconProps, children });
      const iconName = name as keyof typeof iconSet;

      if (!props.name || !iconSet[iconName]) {
        return null;
      }

      const svgObject = iconSet[iconName];
      const { svg: svgChild, ...rest } = svgObject;

      return (
        <svg {...iconProps} {...rest} accessibility-label={accessibilityLabel}>
          {svgChild}
        </svg>
      )
      break; 
    case 'downloading':
      return <Spinner {...iconProps} />;
      break;
    case 'material':
      return <IconComponent {...rest} style={{ color, fontSize: size }} />;
      break;
    default:
      return <IconComponent {...rest} style={{ color, fontSize: size }} />;
      break;
  }
};


Icon.defaultProps = {
  set: 'assets'
};

export default Icon;