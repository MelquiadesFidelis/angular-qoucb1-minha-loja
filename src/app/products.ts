export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Geforce GTX 1660 DUAL OC',
    price: 799,
    description:
      'GPU: GTX 1660 Chipset: TU116 CUDA Cores: 1408 Base clock: 1530 MHz'
  },
  {
    id: 2,
    name: 'Powercolor radeon RX 550',
    price: 699,
    description:
      'Baseia-se na mais recente arquitetura GCN 4 da AMD, projetada para o GloFo 14nm FinFET'
  },
  {
    id: 3,
    name: 'Galax geforce gtx1650 EX Plus',
    price: 299,
    description:
      'Nova versão GDDR6, tornando a GALAX GeForce® GTX 1650 EX PLUS uma excelente escolha.'
  },
  {
    id: 4,
    name: 'Amd Radeon R7 240 Gaming Edition',
    price: 299,
    description: 'A Radeon R7 240 proporciona alto desempenho e qualidade de imagem HD 1080p em seus jogos favoritos'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
