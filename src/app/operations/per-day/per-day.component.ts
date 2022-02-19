import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-day',
  templateUrl: './per-day.component.html',
  styleUrls: ['./per-day.component.css']
})
export class PerDayComponent implements OnInit {

  constructor() { }

  onSubmit(data){
    console.log(data);
  }

  ngOnInit(): void {
  }

}
