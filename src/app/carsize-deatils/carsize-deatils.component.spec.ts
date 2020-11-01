import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsizeDeatilsComponent } from './carsize-deatils.component';

describe('CarsizeDeatilsComponent', () => {
  let component: CarsizeDeatilsComponent;
  let fixture: ComponentFixture<CarsizeDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsizeDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsizeDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
