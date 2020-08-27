import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLeilaoComponent } from './lista-leilao.component';

describe('ListaLeilaoComponent', () => {
  let component: ListaLeilaoComponent;
  let fixture: ComponentFixture<ListaLeilaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLeilaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLeilaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
