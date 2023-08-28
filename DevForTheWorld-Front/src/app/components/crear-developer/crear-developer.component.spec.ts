import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDeveloperComponent } from './crear-developer.component';

describe('CrearDeveloperComponent', () => {
  let component: CrearDeveloperComponent;
  let fixture: ComponentFixture<CrearDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDeveloperComponent]
    });
    fixture = TestBed.createComponent(CrearDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
