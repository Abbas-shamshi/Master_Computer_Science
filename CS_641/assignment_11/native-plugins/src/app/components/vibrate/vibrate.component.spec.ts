import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VibrateComponent } from './vibrate.component';

describe('VibrateComponent', () => {
  let component: VibrateComponent;
  let fixture: ComponentFixture<VibrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibrateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VibrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
