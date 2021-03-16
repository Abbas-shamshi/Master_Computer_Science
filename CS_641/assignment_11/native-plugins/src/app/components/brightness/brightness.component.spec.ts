import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrightnessComponent } from './brightness.component';

describe('BrightnessComponent', () => {
  let component: BrightnessComponent;
  let fixture: ComponentFixture<BrightnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightnessComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrightnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
