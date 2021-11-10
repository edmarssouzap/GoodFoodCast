import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroempregadoComponent } from './cadastroempregado.component';

describe('CadastroempregadoComponent', () => {
  let component: CadastroempregadoComponent;
  let fixture: ComponentFixture<CadastroempregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroempregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroempregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
