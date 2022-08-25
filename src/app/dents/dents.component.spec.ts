import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentsComponent } from './dents.component';

describe('DentsComponent', () => {
  let component: DentsComponent;
  let fixture: ComponentFixture<DentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
