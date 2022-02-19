import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplychain',
  templateUrl: './supplychain.component.html',
  styleUrls: ['./supplychain.component.css']
})
export class SupplychainComponent implements OnInit {

  constructor() { }

  onSubmit(data){
    console.log(data);
  }

  ngOnInit(): void {
  }

}
