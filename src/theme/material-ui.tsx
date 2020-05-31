import { useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Colors, ColorsDark, ColorsLight } from '../modules/colors';
import { BorderRadius, FontWeight } from '../modules/variables';

// line 10 needs to be passed as a prop toggle
const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
export const theme = useMemo(
  () =>
    createMuiTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 480,
          md: 768,
          lg: 960,
          xl: 1400,
        },
      },
      typography: {
        fontFamily: 'Roboto, Proxima Nova Extrabold, Helvetica Neue, Arial, sans-serif',
        fontSize: 16,
        fontWeightBold: FontWeight.bold,
        fontWeightLight: FontWeight.light,
        fontWeightMedium: FontWeight.semibold,
        fontWeightRegular: FontWeight.normal,
        h1: {
          fontFamily: 'Proxima Nova Extrabold',
          fontWeight: FontWeight.normal,
          fontSize: '5.25rem',
          lineHeight: 1.167,
          letterSpacing: '-0.1562em',
        },
        h2: {
          fontFamily: 'Helvetica Light',
          fontWeight: FontWeight.normal,
          fontSize: '3.75rem',
          lineHeight: 1.2,
          letterSpacing: '-.00083em',
        },
        h3: {
          fontFamily: 'Helvetica Light',
          fontWeight: FontWeight.normal,
          fontSize: '3rem',
          lineHeight: 1.167,
          letterSpacing: '2px',
        },
        h4: {
          fontFamily: 'Roboto Regular',
          fontWeight: FontWeight.normal,
          fontSize: '1.25rem',
          lineHeight: 1.235,
          letterSpacing: '0.00735em',
        },
        h5: {
          fontFamily: 'Helvetica Medium',
          fontWeight: FontWeight.normal,
          fontSize: '1.125rem',
          lineHeight: 1.125,
          letterSpacing: '-0.00735em',
        },
        body1: {
          fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
          fontWeight: FontWeight.normal,
          fontSize: '0.875rem',
          lineHeight: 1.4,
          letterSpacing: '0.00938em',
        },
        button: {
          fontFamily: 'Helvetica Neue',
          fontWeight: FontWeight.normal,
          fontSize: '1.6875rem',
          textTransform: 'capitalize',
          letterSpacing: '0.02857em',
        },
      },
      shape: {
        borderRadius: BorderRadius.base,
      },
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
          light: ColorsLight.primary,
          main: Colors.primary,
          dark: ColorsDark.primary
        },
        secondary: {
          light: ColorsLight.secondary,
          main: Colors.secondary,
          dark: ColorsDark.secondary
        },
        error: {
          light: ColorsLight.error,
          main: Colors.error,
          dark: ColorsDark.error
        },
        warning: {
          light: ColorsLight.warning,
          main: Colors.warning,
          dark: ColorsDark.warning
        },
        info: {
          light: ColorsLight.info,
          main: Colors.info,
          dark: ColorsDark.info
        },
        success: {
          light: ColorsLight.success,
          main: Colors.success,
          dark: ColorsDark.success
        },
        contrastThreshold: 3,
        tonalOffset: 0.25,
      },
    }),
  [prefersDarkMode]
);

export const highContrastTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1400,
    },
  },
  typography: {
    fontFamily: 'Roboto, Proxima Nova Extrabold, Helvetica Neue, Arial, sans-serif',
    fontSize: 16,
    fontWeightLight: FontWeight.light,
    fontWeightRegular: FontWeight.normal,
    fontWeightMedium: FontWeight.semibold,
    fontWeightBold: FontWeight.bold,
    h1: {
      fontFamily: 'Proxima Nova Extrabold',
      fontWeight: FontWeight.normal,
      fontSize: '5.25rem',
      lineHeight: 1.167,
      letterSpacing: '-0.1562em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Helvetica Light',
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-.00083em',
      textTransform: 'lowercase',
    },
    h3: {
      fontFamily: 'Helvetica Light',
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '2px',
      textTransform: 'lowercase',
    },
    h4: {
      fontFamily: 'Roboto Regular',
      fontSize: '1.25rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: 'Helvetica Medium',
      fontSize: '1.125rem',
      lineHeight: 1.125,
      letterSpacing: '-0.00735em',
    },
    h6: {
      fontFamily: 'Roboto Bold',
      fontWeight: FontWeight.bold,
      fontSize: '0.83645rem',
    },
    body1: {
      fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
      fontWeight: FontWeight.normal,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '0.00938em',
    },
    button: {
      fontFamily: 'Helvetica Neue',
      fontWeight: FontWeight.normal,
      fontSize: '1.6875rem',
      letterSpacing: '0.02857em',
      textTransform: 'capitalize',
    },
  },
  shape: {
    borderRadius: BorderRadius.base,
  },
  palette: {
    primary: {
      main: Colors.white
    },
    secondary: {
      main: Colors.white
    },
    error: {
      main: Colors.gray
    },
    warning: {
      main: Colors.white
    },
    info: {
      main: Colors.white
    },
    success: {
      main: Colors.white
    },
    contrastThreshold: 3,
    tonalOffset: 0.25,
  }
});

// interface AvatarProps extends React.ComponentProps<typeof Avatar.default> {
//   size?: number;
// }

// export const Avatar = ({ size, ...rest }: AvatarProps) => {
//   return (
//     <Avatar.default
//       {...rest}
//       style={{
//         width: size,
//         height: size,
//         ...rest.style,
//       }}
//     />
//   );
// };

// export interface ButtonProps extends React.ComponentProps<typeof Button.default> {
//   loading?: boolean;
// }

// export const Button = ({ children, disabled, loading, ...rest }: ButtonProps) => {
//   return (
//     <Button.default {...rest}>
//       {children}
//       {loading ? (
//         <CircularProgress.default
//           size={20}
//           style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' }}
//           data-testid="button loading"
//         />
//       ) : null}
//     </Button.default>
//   );
// };
