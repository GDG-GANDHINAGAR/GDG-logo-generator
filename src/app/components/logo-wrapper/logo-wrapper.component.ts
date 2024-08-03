import {Component} from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {ConfigType} from "../../constants/types";
import {Communities} from "../../constants/enums";
import {GdgNormalComponent} from "../logos/gdg-normal/gdg-normal.component";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-logo-wrapper',
  standalone: true,
  imports: [
    GdgNormalComponent,
    MatCard
  ],
  templateUrl: './logo-wrapper.component.html',
  styleUrl: './logo-wrapper.component.sass'
})
export class LogoWrapperComponent {
  config: ConfigType & any = {}

  constructor(private configService: ConfigService) {
    this.configService.getConfig.subscribe(change => {
      this.config = change;
    })
  }

  protected readonly Communities = Communities;
}
