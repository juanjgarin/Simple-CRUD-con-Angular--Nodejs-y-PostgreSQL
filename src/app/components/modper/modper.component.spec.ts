import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModperComponent } from './modper.component';

describe('ModperComponent', () => {
  let component: ModperComponent;
  let fixture: ComponentFixture<ModperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
