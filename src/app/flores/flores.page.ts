import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.page.html',
  styleUrls: ['./flores.page.scss'],
})
export class FloresPage implements OnInit {

  constructor() { }

  items;

  ngOnInit() {
    this.initializeItems();

  }

  initializeItems() {
    this.items = [
      {nome: "Rosa", imagem: 'rosa.jpg' },
      {nome: "tes", imagem: 'azaleia.jpg' },
      {nome: "Amor-perfeito", imagem: 'amorperfeito.jpg' },
      {nome: "Flor", imagem: 'flor.jpg' }      
    ];
  }
  
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })

    }

  }

}
