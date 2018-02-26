import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadaver Exquisito';
  poemas = [
  true,
  true
  ];

  onShowPoem(input){
  	this.poemas[input.id] = input.mostrar;
  }
}
