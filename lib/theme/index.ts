import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from 'styled-components';
import * as colors from '../styles/colors';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
    default: string;
    primary: string;
    secondary: string;
    highlight: string;
    lightGrey: string;
    lightBG: string;

    font: string;
    heading: string;

    pillFill: string;
    pillFont: string;

    buttonFill: string;
    buttonFont: string;

    alert: string;
}

export const theme = {
    default: colors.grey,
    primary: colors.blue,
    secondary: colors.purple,
    highlight: colors.green,
    lightGrey: colors.lightGrey,
    lightBG: colors.lightBG,

    font: colors.grey,
    heading: colors.black,

    pillFill: colors.grey,
    pillFont: colors.white,

    buttonFill: colors.grey,
    buttonFont: colors.white,

    alert: colors.info
};

export default styled;
export {
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
};