import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://giselegranato.com';
  teozinhoAmoeba:boolean = true;
  urlImg:string = 'https://static01.nyt.com/images/2017/10/13/movies/GHIBLI-TOTORO/merlin-to-scoop-52128551-51647-articleLarge.jpg?quality=75&auto=webp&disable=upscale';
  urlImg2:string = 'https://i.kinja-img.com/gawker-media/image/upload/s--qV6bJzoS--/c_scale,f_auto,fl_progressive,q_80,w_800/kxmtuzgzzveafdkxnkvj.jpg';
  urlImg3:string = 'https://static01.nyt.com/images/2017/10/15/arts/15GHIBLI-RANKINGS-PONYO/15GHIBLI-RANKINGS-PONYO-articleLarge.jpg?quality=90&auto=webp';

  getValorzinho(){
    return 1;
  }
 getCurtidas(){
   return true;
 }
  constructor() { }

  ngOnInit() {
  }
}
