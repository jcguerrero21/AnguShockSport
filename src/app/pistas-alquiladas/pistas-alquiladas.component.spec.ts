import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistasAlquiladasComponent } from './pistas-alquiladas.component';

describe('PistasAlquiladasComponent', () => {
  let component: PistasAlquiladasComponent;
  let fixture: ComponentFixture<PistasAlquiladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistasAlquiladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistasAlquiladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
