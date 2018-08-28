import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // cursos:string[] = ['XafaScroop', 'Anguloso','Poderoso','BemQViu']; 
  dominioWeb:string='http://giselegranato.com';
  cursos:string[]; 

  constructor(
    private cursosService: CursosService
  ) {

    this.dominioWeb;

    this.cursos = this.cursosService.getCursos()
  }
  
  ngOnInit() {
    // for (let i=0; i<this.cursos.length; i++){
      // let curso = this.cursos[i];
      // }

      // var servicoCursos = new CursosService(); 
  }

}
