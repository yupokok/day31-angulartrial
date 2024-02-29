import { Component } from '@angular/core';
import { NumberData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31numbers';

  selection = 0

  selectedNumber(n:number){
  this.selection = n

  }


}








  // numbers: NumberData[] =
  // [
  //  {image:"/assets/numbers/number0.jpg", value:"0"},
  //  {image:"/assets/numbers/number1.jpg", value:"1"},
  //  {image:"/assets/numbers/number2.jpg", value:"2"},
  //  {image:"/assets/numbers/number3.jpg", value:"3"},
  //  {image:"/assets/numbers/number4.jpg", value:"4"},
  //  {image:"/assets/numbers/number5.jpg", value:"5"},
  //  {image:"/assets/numbers/number6.jpg", value:"6"},
  //  {image:"/assets/numbers/number7.jpg", value:"7"},
  //  {image:"/assets/numbers/number8.jpg", value:"8"},
  //  {image:"/assets/numbers/number9.jpg", value:"9"},
  //  {image:"/assets/numbers/number10.jpg", value:"10"},
  //  {image:"/assets/numbers/number11.jpg", value:"11"},
  //  {image:"/assets/numbers/number12.jpg", value:"12"},
  //  {image:"/assets/numbers/number13.jpg", value:"13"},
  //  {image:"/assets/numbers/number14.jpg", value:"14"},
  //  {image:"/assets/numbers/number15.jpg", value:"15"},
  //  {image:"/assets/numbers/number16.jpg", value:"16"},
  //  {image:"/assets/numbers/number17.jpg", value:"17"},
  //  {image:"/assets/numbers/number18.jpg", value:"18"},
  //  {image:"/assets/numbers/number19.jpg", value:"19"},
  //  {image:"/assets/numbers/number20.jpg", value:"20"},
  //  {image:"/assets/numbers/number21.jpg", value:"21"},
  //  {image:"/assets/numbers/number22.jpg", value:"22"},
  //  {image:"/assets/numbers/number23.jpg", value:"23"},
  //  {image:"/assets/numbers/number24.jpg", value:"24"},
  //  {image:"/assets/numbers/number25.jpg", value:"25"},
  //  {image:"/assets/numbers/number26.jpg", value:"26"},
  //  {image:"/assets/numbers/number27.jpg", value:"27"},
  //  {image:"/assets/numbers/number28.jpg", value:"28"},
  //  {image:"/assets/numbers/number29.jpg", value:"29"},
  //  {image:"/assets/numbers/number30.jpg", value:"30"},   
  // ]

