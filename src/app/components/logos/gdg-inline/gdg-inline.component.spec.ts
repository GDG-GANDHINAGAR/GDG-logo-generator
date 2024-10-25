import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgInlineComponent } from './gdg-inline.component';

describe('GdgInlineComponent', () => {
  let component: GdgInlineComponent;
  let fixture: ComponentFixture<GdgInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdgInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdgInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
