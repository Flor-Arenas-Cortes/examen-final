import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPaginaComponent } from './cuerpo-pagina.component';

describe('CuerpoPaginaComponent', () => {
  let component: CuerpoPaginaComponent;
  let fixture: ComponentFixture<CuerpoPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
