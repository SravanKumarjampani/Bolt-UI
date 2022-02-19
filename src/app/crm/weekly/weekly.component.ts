import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  constructor() { }

  onSubmit(data){
    console.log(data);
  }

  ngOnInit(): void {
  }

}
