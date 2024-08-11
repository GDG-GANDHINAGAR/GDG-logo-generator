import {Communities} from "./enums";

export type ConfigType = {
  name: string,
  type: Communities,
  isMonochrome: boolean | '',
  color: string,
  bgColor: string,
  variant: 1 | 2
}
