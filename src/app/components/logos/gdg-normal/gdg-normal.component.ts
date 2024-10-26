import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
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
export class GdgNormalComponent implements AfterViewInit{
  @Input() config: ConfigType & any;
  @Output() onConfigChange = new EventEmitter();
  @ViewChild('svg') node: ElementRef;
  protected readonly Communities = Communities;
  ngAfterViewInit() {
    this.onConfigChange.emit(this.node)
  }
}

