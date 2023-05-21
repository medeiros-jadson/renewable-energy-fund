import { Sizing, SizingNone } from './sizing';

export declare type BorderWidth = Sizing<number> & SizingNone;

export declare type BorderRadius = Sizing<number> &
  SizingNone & { circle: number };
