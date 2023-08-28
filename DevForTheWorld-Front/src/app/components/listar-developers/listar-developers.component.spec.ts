import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDevelopersComponent } from './listar-developers.component';

describe('ListarDevelopersComponent', () => {
  let component: ListarDevelopersComponent;
  let fixture: ComponentFixture<ListarDevelopersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDevelopersComponent]
    });
    fixture = TestBed.createComponent(ListarDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
