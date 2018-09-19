import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nameOfMonths: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  daysOfMonths: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  nameOfDays: string [] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  boxes: number = 42;
  count: number = 0;

  today = new Date();
  thisYear = new Date().getFullYear();
  thisMonth: number = new Date().getMonth();
  firstDay = new Date(this.thisYear, this.thisMonth, 1).getDay();



  constructor(
  ) {}


  ngOnInit(){


  }


  gotoNextMonth(): void{
    if(this.thisMonth == 11) {
      this.thisYear = this.thisYear + 1;
      this.thisMonth = 0;

    }
    else {
      this.thisMonth += 1;
    }
    this.firstDay = new Date(this.thisYear, this.thisMonth, 1).getDay();
  }

  gotoPreviousMonth() : void{
    if(this.thisMonth == 0) {
      this.thisYear = this.thisYear - 1;
      this.thisMonth = 11;

    }
    else {
      this.thisMonth -= 1;
    }
    this.firstDay = new Date(this.thisYear, this.thisMonth, 1).getDay();
  }

  createArray(num): any {
    var arr: any[] = [];
    for(let i = 1; i <= num; i++){
      if(i <= this.firstDay)
        arr.push("");
      else if(i > this.daysOfMonths[this.thisMonth] + this.firstDay) {
        //console.log(i, this.nameOfMonths[this.thisMonth]);
        if (i == (29+this.firstDay) && this.thisMonth == 1 && this.thisYear % 4 == 0) {
          if (this.thisYear % 100 != 0)
            arr.push("29");
          if (this.thisYear % 400 == 0)
            arr.push("29");
        }
        else arr.push("");
      }
      else {
        arr.push(i - this.firstDay);
      }
    }
    return arr;
  }


}



