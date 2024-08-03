import {Pipe, PipeTransform} from '@angular/core';
import {ConfigType} from "../constants/types";

@Pipe({
  name: 'color',
  standalone: true
})
export class ColorPipe implements PipeTransform {

  transform(value: ConfigType, kind: 'logo' | 'label' | 'bg'): string {
    if (value.isMonochrome) {
      switch (kind) {
        case "logo":
          return value.color
        case "label":
          return value.color
        case "bg":
          return value.bgColor
      }
    } else {
      switch (kind) {
        case "logo":
          return '#656c73'
        case "label":
          return '#656c73'
        case "bg":
          return '#ffffff00'
      }
    }
  }

}
