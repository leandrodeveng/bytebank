import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number = 1;
  destino: number = 1;

  transferir() {
    console.log('Solicitar nova transferencia');
    console.log('Valor', this.valor);
    console.log('Destino', this.destino);
  }
}
