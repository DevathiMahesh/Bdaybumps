import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemcardComponent } from './remcard.component';

describe('RemcardComponent', () => {
  let component: RemcardComponent;
  let fixture: ComponentFixture<RemcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
