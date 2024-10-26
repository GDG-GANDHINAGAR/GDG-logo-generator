import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {Communities} from "../../constants/enums";
import {MatCard} from "@angular/material/card";
import {NgxColorsModule} from "ngx-colors";
import {AsyncPipe} from "@angular/common";
import {ConfigService} from "../../services/config.service";
import {MatButton} from "@angular/material/button";
import {DefaultConfig} from "../../constants/defaults";
import {LOGO_ALIGNMENT} from "../../constants/types";

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatSlideToggleModule, MatSelectModule, MatCard, NgxColorsModule, AsyncPipe, MatButton],
  templateUrl: './config-form.component.html',
  styleUrl: './config-form.component.sass'
})
export class ConfigFormComponent {
  communities = [
    {
      name: 'Google Developer Groups',
      value: Communities.GDG
    }, {
      name: 'Google Developer Groups Cloud',
      value: Communities.GDGC
    },
  ]

   alignments = [
    {
      name: 'Center',
      value: LOGO_ALIGNMENT.CENTER
    },{
      name: 'Inline',
      value: LOGO_ALIGNMENT.INLINE
     },
  ]

  monoChrome: any;
  form: FormGroup = new FormGroup({
    name: new FormControl(DefaultConfig.name,),
    type: new FormControl(DefaultConfig.type),
    alignment: new FormControl(DefaultConfig.alignment),
    isMonochrome: new FormControl(DefaultConfig.isMonochrome),
    color: new FormControl(DefaultConfig.color),
    bgColor: new FormControl(DefaultConfig.bgColor),
    kind: new FormControl('')
  })
  isMonochrome = this.form.get('isMonochrome')?.valueChanges;

  constructor(private configService: ConfigService) {
    this.form.valueChanges.subscribe(change => {
      this.configService.setConfig(this.form.value)
    })
  }

  setBgTransparent() {
    this.form.get('bgColor')?.setValue('#ffffff00')
  }

  triggerDownload(kind: 'svg' | 'png') {
    this.configService.triggerDownload(kind)
  }
}
