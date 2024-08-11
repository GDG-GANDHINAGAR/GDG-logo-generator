import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {DefaultConfig} from "../constants/defaults";

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements OnDestroy {
  private $config = new BehaviorSubject(DefaultConfig)
  private $download = new Subject()
  getConfig: Observable<any> = this.$config?.asObservable()
  trigger = this.$download.asObservable()

  constructor() {
  }

  setConfig(config: any) {
    this.$config?.next(config)
  }

  ngOnDestroy() {
    this.$config?.complete()
  }


  triggerDownload(kind: 'svg' | 'png') {
    this.$download.next(kind)
  }
}
