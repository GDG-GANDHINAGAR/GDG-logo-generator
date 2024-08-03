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

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatSlideToggleModule, MatSelectModule, MatCard, NgxColorsModule, AsyncPipe],
  templateUrl: './config-form.component.html',
  styleUrl: './config-form.component.sass'
})
export class ConfigFormComponent {
  communities = [
    {
      name: 'Google developer Groups',
      value: Communities.GDG
    }, {
      name: 'Google developer Groups Cloud',
      value: Communities.GDGC
    },
  ]
  monoChrome: any;
  form: FormGroup = new FormGroup({
    name: new FormControl('Phulera',),
    type: new FormControl(this.communities[0].value),
    isMonochrome: new FormControl(''),
    color: new FormControl('#656c73'),
    bgColor: new FormControl('#ffffff00'),
  })
  isMonochrome = this.form.get('isMonochrome')?.valueChanges;

  constructor(private configService: ConfigService) {
    this.form.valueChanges.subscribe(change => {
      this.configService.setConfig(this.form.value)
    })
  }
}
