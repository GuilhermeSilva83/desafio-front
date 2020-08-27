import { Component, OnInit } from '@angular/core';
import { LeilaoService } from 'src/app/services/leilao.service';
import { Router } from '@angular/router';
import { Leilao, Usuario } from 'src/app/model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-leilao',
  templateUrl: './lista-leilao.component.html',
  styleUrls: ['./lista-leilao.component.sass']
})
export class ListaLeilaoComponent implements OnInit {

  campos = ['nome', 'valorInicial', 'usado', 'usuarioResponsavel', 'dataAbertura', 'dataFinalizacao', 'actions'];
  lista: Leilao[];

  constructor(private service: LeilaoService, private router: Router) { }

  ngOnInit(): void {
    this.Reload();
  }

  Reload() {
    this.service.List().then((data) => {
      this.lista = data;
    })


  }

  Excluir(id) {
    // alert(id);
    this.service.DeleteById(id).then(result => {
      if (result.success) {
        this.Reload();
      }
    })
  }


}
