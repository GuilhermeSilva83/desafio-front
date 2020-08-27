import { Component, OnInit } from '@angular/core';
import { LeilaoService } from 'src/app/services/leilao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Leilao, Usuario } from 'src/app/model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-leilao',
  templateUrl: './leilao.component.html',
  styleUrls: ['./leilao.component.sass']
})
export class LeilaoComponent implements OnInit {

  obj = new Leilao();
  usuarios: Usuario[];
  erro: string = null;

  constructor(private service: LeilaoService, private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {


  }

  async ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.obj = await this.service.GetById(id);
    }

    this.usuarioService.List().then(list => {
      this.usuarios = list;
    });
  }

  submit(form: NgForm) {
    this.service.Save(this.obj).then(d => {
      if (d.success) {
        this.router.navigateByUrl('leilao');
      }
    });
  }
}
