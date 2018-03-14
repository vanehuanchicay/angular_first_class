import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso-form',
  templateUrl: './verso-form.component.html',
  styleUrls: ['./verso-form.component.css']
})
export class VersoFormComponent implements OnInit {
  @Input() verso:Verso = new Verso();
  @Output() submit = new EventEmitter<Verso>()
  versoForm:FormGroup;
  
  constructor(private fb:FormBuilder) { // inyección de dependencias
    this.createForm();
  }

  ngOnInit() {
  }
  ngOnChanges(){ // se va a llamar cada vez que se cambia un valor 

  }
  onAgregarVerso(){
    if(this.versoForm.valid)
      var newVerso = new Verso();
      newVerso.nombreJugador = this.verso.nombreJugador;
      this.submit.emit(newVerso);
      this.versoForm.reset();
  }

  createForm(){
    this.versoForm = this.fb.group({
      jugador : [this.verso.nombreJugador, [Validators.required, Validators.minLength(4)]],
      contenido : [this.verso.contenido],
      indice : [0,Validators.min(0)]
    });

    this.versoForm.valueChanges.subscribe(() =>{
      this.verso.nombreJugador = this.versoForm.value.jugador;
      this.verso.contenido = this.versoForm.value.contenido;
   
    })
  }
}
