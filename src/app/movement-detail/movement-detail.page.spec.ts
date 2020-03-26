import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovementDetailPage } from './movement-detail.page';

describe('MovementDetailPage', () => {
  let component: MovementDetailPage;
  let fixture: ComponentFixture<MovementDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovementDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
