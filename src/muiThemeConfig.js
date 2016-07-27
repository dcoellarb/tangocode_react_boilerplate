import { fade } from 'material-ui/utils/colorManipulator';
import {
  green500,
  red500,
  grey100,
  grey300,
  grey400,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { globalColors, globalFonts } from './jsonStyles/globalStyles';

export const muiTheme = getMuiTheme({
  fontFamily: globalFonts.fontFamily,
  palette: {
    primary1Color: globalColors.primary1Color,
    primary2Color: globalColors.primary2Color,
    primary3Color: grey400,
    backgroundColor: globalColors.backgroundColor,
    accent1Color: red500,
    accent2Color: grey100,
    accent3Color: globalColors.primary1Color,
    textColor: fullBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: green500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  appBar: {
    height: 50,
    color: globalColors.primary2Color
  },
  toolbar: {
    backgroundColor: globalColors.primary1Color
  }
});
