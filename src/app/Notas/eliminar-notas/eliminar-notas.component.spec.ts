import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNotasComponent } from './eliminar-notas.component';

describe('EliminarNotasComponent', () => {
  let component: EliminarNotasComponent;
  let fixture: ComponentFixture<EliminarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
