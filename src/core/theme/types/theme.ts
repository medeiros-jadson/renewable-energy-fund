import { DefaultTheme } from 'styled-components';
import { BorderRadius, BorderWidth } from './border';
import { BoxShadow } from './boxShadow';
import { Colors } from './colors';
import { LetterSpacing } from './letterSpacing';
import { LineHeights } from './lineHeights';
import { Opacity } from './opacity';
import { Sizing } from './sizing';
import { Spacing } from './spacing';
import {
  FontSizes,
  FontWeights,
  FontsFamilies,
  TextCase,
  TextDecoration,
} from './text';

export declare type ThemeType = {
  sizing: Sizing<number>;
  spacing: Spacing;
  borderWidth: BorderWidth;
  borderRadius: BorderRadius;
  opacity: Opacity;
  fontWeights: FontWeights;
  fontFamilies: FontsFamilies;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  letterSpacing: LetterSpacing;
  colors: Colors;
  boxShadow: BoxShadow;
  textCase: TextCase;
  textDecoration: TextDecoration;
};

export declare type ThemeProps = {
  theme: DefaultTheme;
};
