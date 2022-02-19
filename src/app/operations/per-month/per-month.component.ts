import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-month',
  templateUrl: './per-month.component.html',
  styleUrls: ['./per-month.component.css']
})
export class PerMonthComponent implements OnInit {

  constructor() { }

  onSubmit(data){
    console.log(data);
  }

  ngOnInit(): void {
  }

}
