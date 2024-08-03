import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements OnDestroy{
  private $config = new BehaviorSubject({
    name: 'Phulera',
    type: 0,
    isMonochrome: '',
    color: '#656c73',
    bgColor: '#ffffff00',
  });
  getConfig: Observable<any> = this.$config?.asObservable()

  constructor() {
  }
  setConfig(config: any) {
    this.$config?.next(config)
  }
  ngOnDestroy() {

    this.$config?.complete()
  }
}
