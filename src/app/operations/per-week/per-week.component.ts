import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-week',
  templateUrl: './per-week.component.html',
  styleUrls: ['./per-week.component.css']
})
export class PerWeekComponent implements OnInit {

  constructor() { }

  onSubmit(data){
    console.log(data);
  }

  ngOnInit(): void {
  }

}
