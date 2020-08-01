import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import * as Avatar from '@material-ui/core/Avatar';
import * as Backdrop from '@material-ui/core/Backdrop';
import * as Box from '@material-ui/core/Box';
import * as Button from '@material-ui/core/Button';
import * as CircularProgress from '@material-ui/core/CircularProgress';
import * as Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';

import { Colors, ColorsDark, ColorsLight } from '../modules/colors';
import { BorderRadius, FontSizeDesktop, FontWeight, ZIndex } from '../modules/variables';

// line 10 needs to be passed as a prop toggle
// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
export const myTheme = createMuiTheme({
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
    fontFamily: 'Roboto, Proxima Nova, Helvetica Neue, Arial, sans-serif',
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
      fontFamily: 'Roboto Light',
      fontWeight: FontWeight.normal,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-.00083em',
    },
    h3: {
      fontFamily: 'Roboto Light',
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
      fontFamily: 'Roboto Medium',
      fontWeight: FontWeight.normal,
      fontSize: '1.125rem',
      lineHeight: 1.125,
      letterSpacing: '-0.00735em',
    },
    body1: {
      fontFamily: 'Roboto Regular, Helvetica Neue, Arial, sans-serif',
      fontWeight: FontWeight.normal,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '0.00938em',
    },
    button: {
      fontFamily: 'Roboto Regular, Helvetica Neue',
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
    // type: prefersDarkMode ? 'dark' : 'light',
    type: 'light',
    primary: {
      light: ColorsLight.primary,
      main: Colors.primary,
      dark: ColorsDark.primary,
    },
    secondary: {
      light: ColorsLight.secondary,
      main: Colors.secondary,
      dark: ColorsDark.secondary,
    },
    error: {
      light: ColorsLight.error,
      main: Colors.error,
      dark: ColorsDark.error,
    },
    warning: {
      light: ColorsLight.warning,
      main: Colors.warning,
      dark: ColorsDark.warning,
    },
    info: {
      light: ColorsLight.info,
      main: Colors.info,
      dark: ColorsDark.info,
    },
    success: {
      light: ColorsLight.success,
      main: Colors.success,
      dark: ColorsDark.success,
    },
    contrastThreshold: 3,
    tonalOffset: 0.25,
  },
  // [prefersDarkMode]
});

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
    },
    h2: {
      fontFamily: 'Roboto Light',
      fontWeight: FontWeight.normal,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-.00083em',
    },
    h3: {
      fontFamily: 'Roboto Light',
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
      fontFamily: 'Roboto Medium',
      fontWeight: FontWeight.normal,
      fontSize: '1.125rem',
      lineHeight: 1.125,
      letterSpacing: '-0.00735em',
    },
    body1: {
      fontFamily: 'Roboto Regular, Helvetica Neue, Arial, sans-serif',
      fontWeight: FontWeight.normal,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '0.00938em',
    },
    button: {
      fontFamily: 'Roboto Regular, Helvetica Neue',
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
    primary: {
      main: Colors.white,
    },
    secondary: {
      main: Colors.white,
    },
    error: {
      main: Colors.gray,
    },
    warning: {
      main: Colors.white,
    },
    info: {
      main: Colors.white,
    },
    success: {
      main: Colors.white,
    },
    contrastThreshold: 3,
    tonalOffset: 0.25,
  },
});

export type MuiThemeOne = typeof myTheme;
export type MuiThemeTwo = typeof highContrastTheme;

export { default as MuiAppBar } from '@material-ui/core/AppBar';
export * from '@material-ui/core/AppBar';

interface AvatarProps {
  size?: number;
}

export const MuiAvatar = ({ size, ...rest }: AvatarProps) => {
  return (
    <Avatar.default
      {...rest}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export const MuiBackdrop = styled(Backdrop.default)`
  && {
    z-index: ${ZIndex.max};
  }
`;
export * from '@material-ui/core/Backdrop';

export { default as MuiBadge } from '@material-ui/core/Badge';
export * from '@material-ui/core/Badge';

export { default as MuiBottomNavigation } from '@material-ui/core/BottomNavigation';
export * from '@material-ui/core/BottomNavigation';

export { default as MuiBottomNavigationAction } from '@material-ui/core/BottomNavigationAction';
export * from '@material-ui/core/BottomNavigationAction';

export { default as MuiBox } from '@material-ui/core/Box';
export * from '@material-ui/core/Box';

export { default as MuiBreadcrumbs } from '@material-ui/core/Breadcrumbs';
export * from '@material-ui/core/Breadcrumbs';

export * from '@material-ui/core/Button';

export interface ButtonProps extends React.ComponentProps<typeof Button.default> {
  loading?: boolean;
}

export const MuiButton = ({ children, disabled, loading, ...rest }: ButtonProps) => {
  return (
    <Button.default disabled={disabled || loading} {...rest}>
      {children}
      {loading ? (
        <CircularProgress.default
          size={20}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' }}
          data-testid="button loading"
        />
      ) : null}
    </Button.default>
  );
};

interface MuiTypographyProps extends Omit<React.ComponentProps<typeof MuiTypography>, 'color'> {
  color?: 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  fontSize?: number;
  fontWeight?: number;
  textTransform?: 'capitalize' | 'lowercase' | 'initial' | 'inherit' | 'uppercase';
  component?: React.ComponentType | string;
}

const colorPalette = ['primary', 'secondary', 'textPrimary', 'textSecondary', 'error'] as const;

const isColorPaletteColor = (color: any): color is typeof colorPalette[number] => {
  return colorPalette.includes(color);
};

export const MuiTheme = typeof myTheme;
export const MuiThemeProvider: React.FC = ({ children }) => <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;

export const MuiTypography = (props: MuiTypographyProps) => {
  return (
    <Typography.default
      {...props}
      color={isColorPaletteColor(props.color) ? props.color : 'initial'}
      style={{
        fontSize: props.fontSize ? `${props.fontSize}px` : `${FontSizeDesktop.base}px`,
        fontWeight: props.fontWeight ? props.fontWeight : FontWeight.normal,
        textTransform: props.textTransform ? props.textTransform : undefined,
        ...props,
      }}
    />
  );
};

export { default as MuiButtonBase } from '@material-ui/core/ButtonBase';
export * from '@material-ui/core/ButtonBase';

export { default as MuiButtonGroup } from '@material-ui/core/ButtonGroup';
export * from '@material-ui/core/ButtonGroup';

export { default as MuiCard } from '@material-ui/core/Card';
export * from '@material-ui/core/Card';

export { default as MuiCardActionArea } from '@material-ui/core/CardActionArea';
export * from '@material-ui/core/CardActionArea';

export { default as MuiCardActions } from '@material-ui/core/CardActions';
export * from '@material-ui/core/CardActions';

export { default as MuiCardContent } from '@material-ui/core/CardContent';
export * from '@material-ui/core/CardContent';

export { default as MuiCardHeader } from '@material-ui/core/CardHeader';
export * from '@material-ui/core/CardHeader';

export { default as MuiCardMedia } from '@material-ui/core/CardMedia';
export * from '@material-ui/core/CardMedia';

export { default as MuiCheckbox } from '@material-ui/core/Checkbox';
export * from '@material-ui/core/Checkbox';

export { default as MuiChip } from '@material-ui/core/Chip';
export * from '@material-ui/core/Chip';

export { default as MuiCircularProgress } from '@material-ui/core/CircularProgress';
export * from '@material-ui/core/CircularProgress';

export { default as MuiClickAwayListener } from '@material-ui/core/ClickAwayListener';
export * from '@material-ui/core/ClickAwayListener';

export { default as MuiCollapse } from '@material-ui/core/Collapse';
export * from '@material-ui/core/Collapse';

export { default as MuiContainer } from '@material-ui/core/Container';
export * from '@material-ui/core/Container';

export { default as MuiCssBaseline } from '@material-ui/core/CssBaseline';
export * from '@material-ui/core/CssBaseline';

export { default as MuiDatePicker } from '@material-ui/pickers/DatePicker';
export * from '@material-ui/pickers/DatePicker';

export { default as MuiDateTimePicker } from '@material-ui/pickers/DateTimePicker';
export * from '@material-ui/pickers/DateTimePicker';

export { default as MuiDialog } from '@material-ui/core/Dialog';
export * from '@material-ui/core/Dialog';

export { default as MuiDialogActions } from '@material-ui/core/DialogActions';
export * from '@material-ui/core/DialogActions';

export { default as MuiDialogContent } from '@material-ui/core/DialogContent';
export * from '@material-ui/core/DialogContent';

export { default as MuiDialogContentText } from '@material-ui/core/DialogContentText';
export * from '@material-ui/core/DialogContentText';

export { default as MuiDialogTitle } from '@material-ui/core/DialogTitle';
export * from '@material-ui/core/DialogTitle';

export { default as MuiDivider } from '@material-ui/core/Divider';
export * from '@material-ui/core/Divider';

export { default as MuiDrawer } from '@material-ui/core/Drawer';
export * from '@material-ui/core/Drawer';

export { default as MuiExpansionPanel } from '@material-ui/core/ExpansionPanel';
export * from '@material-ui/core/ExpansionPanel';

export { default as MuiExpansionPanelActions } from '@material-ui/core/ExpansionPanelActions';
export * from '@material-ui/core/ExpansionPanelActions';

export { default as MuiExpansionPanelDetails } from '@material-ui/core/ExpansionPanelDetails';
export * from '@material-ui/core/ExpansionPanelDetails';

export { default as MuiExpansionPanelSummary } from '@material-ui/core/ExpansionPanelSummary';
export * from '@material-ui/core/ExpansionPanelSummary';

export { default as MuiFab } from '@material-ui/core/Fab';
export * from '@material-ui/core/Fab';

export { default as MuiFade } from '@material-ui/core/Fade';
export * from '@material-ui/core/Fade';

export { default as MuiFilledInput } from '@material-ui/core/FilledInput';
export * from '@material-ui/core/FilledInput';

export { default as MuiFormControl } from '@material-ui/core/FormControl';
export * from '@material-ui/core/FormControl';

export { default as MuiFormControlLabel } from '@material-ui/core/FormControlLabel';
export * from '@material-ui/core/FormControlLabel';

export { default as MuiFormGroup } from '@material-ui/core/FormGroup';
export * from '@material-ui/core/FormGroup';

export { default as MuiFormHelperText } from '@material-ui/core/FormHelperText';
export * from '@material-ui/core/FormHelperText';

export { default as MuiFormLabel } from '@material-ui/core/FormLabel';
export * from '@material-ui/core/FormLabel';

export { default as MuiGrid } from '@material-ui/core/Grid';
export * from '@material-ui/core/Grid';

export { default as MuiGridList } from '@material-ui/core/GridList';
export * from '@material-ui/core/GridList';

export { default as MuiGridListTile } from '@material-ui/core/GridListTile';
export * from '@material-ui/core/GridListTile';

export { default as MuiGridListTileBar } from '@material-ui/core/GridListTileBar';
export * from '@material-ui/core/GridListTileBar';

export { default as MuiGrow } from '@material-ui/core/Grow';
export * from '@material-ui/core/Grow';

export { default as MuiHidden } from '@material-ui/core/Hidden';
export * from '@material-ui/core/Hidden';

export { default as MuiIcon } from '@material-ui/core/Icon';
export * from '@material-ui/core/Icon';

export * from '@material-ui/icons';

export { default as MuiIconButton } from '@material-ui/core/IconButton';
export * from '@material-ui/core/IconButton';

export { default as MuiInput } from '@material-ui/core/Input';
export * from '@material-ui/core/Input';

export { default as MuiInputAdornment } from '@material-ui/core/InputAdornment';
export * from '@material-ui/core/InputAdornment';

export { default as MuiInputBase } from '@material-ui/core/InputBase';
export * from '@material-ui/core/InputBase';

export { default as MuiInputLabel } from '@material-ui/core/InputLabel';
export * from '@material-ui/core/InputLabel';

export { default as MuiLinearProgress } from '@material-ui/core/LinearProgress';
export * from '@material-ui/core/LinearProgress';

export { default as MuiLink } from '@material-ui/core/Link';
export * from '@material-ui/core/Link';

export { default as MuiList } from '@material-ui/core/List';
export * from '@material-ui/core/List';

export { default as MuiListItem } from '@material-ui/core/ListItem';
export * from '@material-ui/core/ListItem';

export { default as MuiListItemAvatar } from '@material-ui/core/ListItemAvatar';
export * from '@material-ui/core/ListItemAvatar';

export { default as MuiListItemIcon } from '@material-ui/core/ListItemIcon';
export * from '@material-ui/core/ListItemIcon';

export { default as MuiListItemSecondaryAction } from '@material-ui/core/ListItemSecondaryAction';
export * from '@material-ui/core/ListItemSecondaryAction';

export { default as MuiListItemText } from '@material-ui/core/ListItemText';
export * from '@material-ui/core/ListItemText';

export { default as MuiListSubheader } from '@material-ui/core/ListSubheader';
export * from '@material-ui/core/ListSubheader';

export { default as MuiMenu } from '@material-ui/core/Menu';
export * from '@material-ui/core/Menu';

export { default as MuiMenuItem } from '@material-ui/core/MenuItem';
export * from '@material-ui/core/MenuItem';

export { default as MuiMenuList } from '@material-ui/core/MenuList';
export * from '@material-ui/core/MenuList';

export { default as MuiMobileStepper } from '@material-ui/core/MobileStepper';
export * from '@material-ui/core/MobileStepper';

export { default as MuiModal } from '@material-ui/core/Modal';
export * from '@material-ui/core/Modal';

export { default as MuiNativeSelect } from '@material-ui/core/NativeSelect';
export * from '@material-ui/core/NativeSelect';

export { default as MuiNoSsr } from '@material-ui/core/NoSsr';
export * from '@material-ui/core/NoSsr';

export { default as MuiOutlinedInput } from '@material-ui/core/OutlinedInput';
export * from '@material-ui/core/OutlinedInput';

export { default as MuiPaper } from '@material-ui/core/Paper';
export * from '@material-ui/core/Paper';

export { default as MuiPopover } from '@material-ui/core/Popover';
export * from '@material-ui/core/Popover';

export { default as MuiPopper } from '@material-ui/core/Popper';
export * from '@material-ui/core/Popper';

export { default as MuiPortal } from '@material-ui/core/Portal';
export * from '@material-ui/core/Portal';

export { default as MuiRadio } from '@material-ui/core/Radio';
export * from '@material-ui/core/Radio';

export { default as MuiRadioGroup } from '@material-ui/core/RadioGroup';
export * from '@material-ui/core/RadioGroup';

export { default as MuiRootRef } from '@material-ui/core/RootRef';
export * from '@material-ui/core/RootRef';

export { default as MuiSelect } from '@material-ui/core/Select';
export * from '@material-ui/core/Select';

export { default as MuiSlide } from '@material-ui/core/Slide';
export * from '@material-ui/core/Slide';

export { default as MuiSlider } from '@material-ui/core/Slider';
export * from '@material-ui/core/Slider';

export { default as MuiSnackbar } from '@material-ui/core/Snackbar';
export * from '@material-ui/core/Snackbar';

export { default as MuiSnackbarContent } from '@material-ui/core/SnackbarContent';
export * from '@material-ui/core/SnackbarContent';

export { default as MuiStep } from '@material-ui/core/Step';
export * from '@material-ui/core/Step';

export { default as MuiStepButton } from '@material-ui/core/StepButton';
export * from '@material-ui/core/StepButton';

export { default as MuiStepConnector } from '@material-ui/core/StepConnector';
export * from '@material-ui/core/StepConnector';

export { default as MuiStepContent } from '@material-ui/core/StepContent';
export * from '@material-ui/core/StepContent';

export { default as MuiStepIcon } from '@material-ui/core/StepIcon';
export * from '@material-ui/core/StepIcon';

export { default as MuiStepLabel } from '@material-ui/core/StepLabel';
export * from '@material-ui/core/StepLabel';

export { default as MuiStepper } from '@material-ui/core/Stepper';
export * from '@material-ui/core/Stepper';

export { default as MuiSvgIcon } from '@material-ui/core/SvgIcon';
export * from '@material-ui/core/SvgIcon';

export { default as MuiSwipeableDrawer } from '@material-ui/core/SwipeableDrawer';
export * from '@material-ui/core/SwipeableDrawer';

export { default as MuiSwitch } from '@material-ui/core/Switch';
export * from '@material-ui/core/Switch';

export { default as MuiTab } from '@material-ui/core/Tab';
export * from '@material-ui/core/Tab';

export { default as MuiTable } from '@material-ui/core/Table';
export * from '@material-ui/core/Table';

export { default as MuiTableBody } from '@material-ui/core/TableBody';
export * from '@material-ui/core/TableBody';

export { default as MuiTableCell } from '@material-ui/core/TableCell';
export * from '@material-ui/core/TableCell';

export { default as MuiTableContainer } from '@material-ui/core/TableContainer';
export * from '@material-ui/core/TableContainer';

export { default as MuiTableFooter } from '@material-ui/core/TableFooter';
export * from '@material-ui/core/TableFooter';

export { default as MuiTableHead } from '@material-ui/core/TableHead';
export * from '@material-ui/core/TableHead';

export { default as MuiTablePagination } from '@material-ui/core/TablePagination';
export * from '@material-ui/core/TablePagination';

export { default as MuiTableRow } from '@material-ui/core/TableRow';
export * from '@material-ui/core/TableRow';

export { default as MuiTableSortLabel } from '@material-ui/core/TableSortLabel';
export * from '@material-ui/core/TableSortLabel';

export { default as MuiTabs } from '@material-ui/core/Tabs';
export * from '@material-ui/core/Tabs';

export { default as MuiTextField } from '@material-ui/core/TextField';
export * from '@material-ui/core/TextField';

export { default as MuiTextareaAutosize } from '@material-ui/core/TextareaAutosize';
export * from '@material-ui/core/TextareaAutosize';

export { default as MuiTimePicker } from '@material-ui/pickers/TimePicker';
export * from '@material-ui/pickers/TimePicker';

export { default as MuiToolbar } from '@material-ui/core/Toolbar';
export * from '@material-ui/core/Toolbar';

export { default as MuiTooltip } from '@material-ui/core/Tooltip';
export * from '@material-ui/core/Tooltip';

export { default as MuiAlert } from '@material-ui/lab/Alert';
export * from '@material-ui/lab/Alert';

export { default as MuiAlertTitle } from '@material-ui/lab/AlertTitle';
export * from '@material-ui/lab/AlertTitle';

export { default as MuiRating } from '@material-ui/lab/Rating';
export * from '@material-ui/lab/Rating';

export { default as MuiuseScrollTrigger } from '@material-ui/core/useScrollTrigger';
export * from '@material-ui/core/useScrollTrigger';

export { default as MuiwithMobileDialog } from '@material-ui/core/withMobileDialog';
export * from '@material-ui/core/withMobileDialog';

export { default as MuiwithWidth } from '@material-ui/core/withWidth';
export * from '@material-ui/core/withWidth';

export { default as MuiZoom } from '@material-ui/core/Zoom';
export * from '@material-ui/core/Zoom';

export { default as MuiAutoComplete } from '@material-ui/lab/Autocomplete';
export * from '@material-ui/lab/Autocomplete';

export const useMuiMediaQuery = (arg: (theme: MuiThemeOne | MuiThemeTwo) => string) =>
  useMediaQuery<typeof myTheme>(arg);

export const MuiCursorBox = styled(Box.default)`
  cursor: pointer;
`;
