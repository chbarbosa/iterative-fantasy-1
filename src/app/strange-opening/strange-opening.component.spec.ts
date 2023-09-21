import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangeOpeningComponent } from './strange-opening.component';

describe('StrangeOpeningComponent', () => {
  let component: StrangeOpeningComponent;
  let fixture: ComponentFixture<StrangeOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrangeOpeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrangeOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
