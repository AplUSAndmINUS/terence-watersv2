import React from 'react';
import styled from 'styled-components';
import { createMuiTheme, SimplePaletteColorOptions, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import * as AppBar from '@material-ui/core/AppBar';
import * as Avatar from '@material-ui/core/Avatar';
import * as Backdrop from '@material-ui/core/Backdrop';
import * as colors from '@material-ui/core/colors';
import * as Button from '@material-ui/core/Button';
import * as CircularProgress from '@material-ui/core/CircularProgress';
import * as Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BottomNavigation, Breadcrumbs, LinearProgress, SwipeableDrawer } from '@material-ui/core';

import { Colors, ColorsDark, ColorsLight } from '../modules/colors';

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
export * as Alert from '@material-ui/core/Alert';
export * as AlertTitle from '@material-ui/core/AlertTitle';
export * as AutoComplete from '@material-ui/core/AutoComplete';
export * as Avatar from '@material-ui/core/Avatar';
export * as Badge from '@material-ui/core/Badge';
export * as BottomNavigation from '@material-ui/core/BottomNavigation';
export * as Box from '@material-ui/core/Box';
export * as Breadcrumbs from '@material-ui/core/Breadcrumbs';
export * as Button from '@material-ui/core/Button';
export * as ButtonBase from '@material-ui/core/ButtonBase';
export * as ButtonGroup from '@material-ui/core/ButtonGroup';
export * as Card from '@material-ui/core/Card';
export * as CardActionArea from '@material-ui/core/CardActionArea';
export * as CardActions from '@material-ui/core/CardActions';
export * as CardContent from '@material-ui/core/CardContent';
export * as CardHeader from '@material-ui/core/CardHeader';
export * as CardMedia from '@material-ui/core/CardMedia';
export * as Checkbox from '@material-ui/core/Checkbox';
export * as Chip from '@material-ui/core/Chip';
export * as CircularProgress from '@material-ui/core/CircularProgress';
export * as ClickAwayListener from '@material-ui/core/ClickAwayListener';
export * as Collapse from '@material-ui/core/Collapse';
export * as Container from '@material-ui/core/Container';
export * as Dialog from '@material-ui/core/Dialog';
export * as DialogActions from '@material-ui/core/DialogActions';
export * as DialogContent from '@material-ui/core/DialogContent';
export * as DialogContentText from '@material-ui/core/DialogContentText';
export * as DialogTitle from '@material-ui/core/DialogTitle';
export * as Divider from '@material-ui/core/Divider';
export * as Drawer from '@material-ui/core/Drawer';
export * as ExpansionPanel from '@material-ui/core/ExpansionPanel';
export * as ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
export * as ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
export * as ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
export * as Fab from '@material-ui/core/Fab';
export * as Fade from '@material-ui/core/Fade';
export * as FilledInput from '@material-ui/core/FilledInput';
export * as FormControl from '@material-ui/core/FormControl';
export * as FormControlLabel from '@material-ui/core/FormControlLabel';
export * as FormGroup from '@material-ui/core/FormGroup';
export * as FormHelperText from '@material-ui/core/FormHelperText';
export * as FormLabel from '@material-ui/core/FormLabel';
export * as Grid from '@material-ui/core/Grid';
export * as GridListTitle from '@material-ui/core/GridListTitle';
export * as Grow from '@material-ui/core/Grow';
export * as Hidden from '@material-ui/core/Hidden';
export * as Icon from '@material-ui/core/Icon';
export * as IconButton from '@material-ui/core/IconButton';
export * as Input from '@material-ui/core/Input';
export * as InputAdornment from '@material-ui/core/InputAdornment';
export * as InputBase from '@material-ui/core/InputBase';
export * as InputLabel from '@material-ui/core/InputLabel';
export * as LinearProgress from '@material-ui/core/LinearProgress';
export * as MuiLink from '@material-ui/core/Link';
export * as ListItem from '@material-ui/core/ListItem';
export * as ListItemAvatar from '@material-ui/core/ListItemAvatar';
export * as ListItemIcon from '@material-ui/core/ListItemIcon';
export * as ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
export * as ListItemText from '@material-ui/core/ListItemText';
export * as ListSubheader from '@material-ui/core/ListSubheader';
export * as Menu from '@material-ui/core/Menu';
export * as MenuItem from '@material-ui/core/MenuItem';
export * as MenuList from '@material-ui/core/MenuList';
export * as MobileStepper from '@material-ui/core/MobileStepper';
export * as Modal from '@material-ui/core/Modal';
export * as NativeSelect from '@material-ui/core/NativeSelect';
export * as NoSsr from '@material-ui/core/NoSsr';
export * as OutlinedInput from '@material-ui/core/OutlinedInput';
export * as Paper from '@material-ui/core/Paper';
export * as Popover from '@material-ui/core/Popover';
export * as Popper from '@material-ui/core/Popper';
export * as Portal from '@material-ui/core/Portal';
export * as Radio from '@material-ui/core/Radio';
export * as RadioGroup from '@material-ui/core/RadioGroup';
export * as Rating from '@material-ui/core/Rating';
export * as RootRef from '@material-ui/core/RootRef';
export * as Select from '@material-ui/core/Select';
export * as Slide from '@material-ui/core/Slide';
export * as Slider from '@material-ui/core/Slider';
export * as Snackbar from '@material-ui/core/Snackbar';
export * as SnackbarContent from '@material-ui/core/SnackbarContent';
export * as Step from '@material-ui/core/Step';
export * as StepButton from '@material-ui/core/StepButton';
export * as StepConnector from '@material-ui/core/StepConnector';
export * as StepContent from '@material-ui/core/StepContent';
export * as StepIcon from '@material-ui/core/StepIcon';
export * as StepLabel from '@material-ui/core/StepLabel';
export * as Stepper from '@material-ui/core/Stepper';
export * as SvgIcon from '@material-ui/core/SvgIcon';
export * as SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
export * as Switch from '@material-ui/core/Switch';
export * as Tab from '@material-ui/core/Tab';
export * as Table from '@material-ui/core/Table';
export * as TableBody from '@material-ui/core/TableBody';
export * as TableCell from '@material-ui/core/TableCell';
export * as TableContainer from '@material-ui/core/TableContainer';
export * as TableFooter from '@material-ui/core/TableFooter';
export * as TableHead from '@material-ui/core/TableHead';
export * as TablePagination from '@material-ui/core/TablePagination';
export * as TableRow from '@material-ui/core/TableRow';
export * as TableSortLabel from '@material-ui/core/TableSortLabel';
export * as Tabs from '@material-ui/core/Tabs';
export * as TextField from '@material-ui/core/TextField';
export * as TextareaAutosize from '@material-ui/core/TextareaAutosize';
export * as Toolbar from '@material-ui/core/Toolbar';
export * as Tooltip from '@material-ui/core/Tooltip';
export * as Zoom from '@material-ui/core/Zoom';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1400
    }
  },
})

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
