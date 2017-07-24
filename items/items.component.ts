import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemName = '';
  items = [
            {'nombreCampo':'Test1','valor':1},
            {'nombreCampo':'Test2','valor':2},
            {'nombreCampo':'Test3','valor':3}
          ];

  constructor() { }

  ngOnInit() {
  }

  // onCreateItem(){
  //   this.items.push(this.itemName);
  // }

}
