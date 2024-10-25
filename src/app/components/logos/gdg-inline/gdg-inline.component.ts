import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Communities} from "../../../constants/enums";
import {ColorPipe} from "../../../pipes/color.pipe";
import {TitleCasePipe} from "@angular/common";
import {ConfigType} from "../../../constants/types";

@Component({
  selector: 'app-gdg-inline',
  standalone: true,
  imports: [
    ColorPipe,
    TitleCasePipe
  ],
  templateUrl: './gdg-inline.component.html',
  styleUrl: './gdg-inline.component.sass'
})
export class GdgInlineComponent {
  @Input() config: ConfigType & any;
  @Output() onConfigChange = new EventEmitter();
  @ViewChild('svg') node: ElementRef;
  protected readonly Communities = Communities;

  ngAfterViewInit() {
    this.onConfigChange.emit(this.node)
  }
}
