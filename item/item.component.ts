import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  nombreCampo: string = '';
  valor: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
