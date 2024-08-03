import {Component, Input} from '@angular/core';
import {TitleCasePipe} from "@angular/common";
import {ConfigType} from "../../../constants/types";
import {Communities} from "../../../constants/enums";
import {ColorPipe} from "../../../pipes/color.pipe";

@Component({
  selector: 'app-gdg-normal',
  standalone: true,
  imports: [
    TitleCasePipe,
    ColorPipe
  ],
  templateUrl: './gdg-normal.component.html',
  styleUrl: './gdg-normal.component.sass'
})
export class GdgNormalComponent {
  @Input() config: ConfigType & any
  protected readonly Communities = Communities;
}

