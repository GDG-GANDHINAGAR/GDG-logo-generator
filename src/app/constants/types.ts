import {Communities} from "./enums";

export type ConfigType = {
  name: string,
  type: Communities,
  alignment: LOGO_ALIGNMENT,
  isMonochrome: boolean | '',
  color: string,
  bgColor: string,
  variant: 1 | 2
}

export enum LOGO_ALIGNMENT {
  CENTER = 'CENTER',
  INLINE = 'INLINE'
}
