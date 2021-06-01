import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['Capitan america', 'Hulk', 'Thor', 'Ironman','Spiderman'];
  heroeBorrado:string='';

  borrarheroe(){
   this.heroeBorrado = this.heroes.shift() || '';
  }
  

}
