import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  //identifica o componente. Por convenção, os seletores de componente angular começam com o prefixo app-, seguido pelo nome do componente.
  selector: 'app-product-alerts',
  //Os nomes de arquivo de modelo e estilo fazem referência ao HTML e CSS do componente.
  templateUrl: './product-alerts.component.html',
  //A definição também exporta a classe , que lida com a funcionalidade do componente.@Component()ProductAlertsComponent
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  //O decorador indica que o valor da propriedade passa do pai do componente
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
