import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiesComponent } from './besties.component';

describe('BestiesComponent', () => {
  let component: BestiesComponent;
  let fixture: ComponentFixture<BestiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
