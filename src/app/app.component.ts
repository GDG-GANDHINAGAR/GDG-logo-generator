import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgxColorsModule} from "ngx-colors";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfigFormComponent} from "./components/config-form/config-form.component";
import {LogoWrapperComponent} from "./components/logo-wrapper/logo-wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxColorsModule, ReactiveFormsModule, FormsModule, ConfigFormComponent, LogoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'gdg-logogen';
  color = '#000'
}
