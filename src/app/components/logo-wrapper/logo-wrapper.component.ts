import {AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2, ViewChild} from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {ConfigType} from "../../constants/types";
import {Communities} from "../../constants/enums";
import {GdgNormalComponent} from "../logos/gdg-normal/gdg-normal.component";
import {MatCard} from "@angular/material/card";
import {CanvasModule, WaCanvas2d, WaCanvasDrawImage} from "@ng-web-apis/canvas";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-logo-wrapper',
  standalone: true,
  imports: [
    GdgNormalComponent,
    MatCard,
  ],
  templateUrl: './logo-wrapper.component.html',
  styleUrl: './logo-wrapper.component.sass'
})
export class LogoWrapperComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('wrapper') wrapper: ElementRef<HTMLDivElement>;
  context: CanvasRenderingContext2D;
  config: ConfigType & any = {}
  protected readonly Communities = Communities;
  blob: Blob;
  nodeRef: ElementRef;
  public isBrowser: boolean;

  constructor(private configService: ConfigService, @Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.configService.getConfig.subscribe(change => {
      this.config = change;
      setTimeout(_ => {
        this.drawImage()
      }, 1000)
    })
    this.configService.trigger.subscribe((value: any) => {
      this.createDownload(value)
    })
  }

  onConfigChange(node: ElementRef) {
    if (!node) return;
    this.nodeRef = node;

  }

  drawImage() {
    if (!this.nodeRef) return;
    const svgString = new XMLSerializer().serializeToString(this.nodeRef.nativeElement)
    this.blob = new Blob([svgString], {
      type: 'image/svg+xml;charset=utf-8'
    });
    const DOMURL: any = window.URL || window.webkitURL || window;
    const url = DOMURL.createObjectURL(this.blob);
    const image = new Image();
    image.width = this.nodeRef.nativeElement.width.baseVal.value;
    image.height = this.nodeRef.nativeElement.height.baseVal.value;
    image.src = url;
    image.onload = () => {
      if (!this.context) return;
      this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.context.drawImage(image, 0, 0);
    }
  }

  ngAfterViewInit() {
    if (this.canvas) {
      this.context = this.canvas.nativeElement.getContext('2d');
    }
  }

  createDownload(kind: 'svg' | 'png') {
    if (!this.isBrowser) return;

    const imgURI = kind === 'png' ? this.canvas.nativeElement
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream') : URL.createObjectURL(this.blob);
    const a = document.createElement('a');

    a.download = `gdg-${this.config.name}-${Date.now()}.${kind}`.toLowerCase(); // filename
    a.target = '_blank';
    a.href = imgURI;
    a.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    }));
  }

}
