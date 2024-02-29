import { Component, Input, Output } from '@angular/core';
import { NumberData } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {

  @Input()
  value: number = 0

  @Input()
  image: string = "/assets/numbers/number{{value}}.jpg"

  @Input()
  min: number = 0

  @Input()
  max: number = 30

  incr(fac: number) {
    this.value += fac

    if (this.value < this.min) { this.value = this.max }
    else if (this.value > this.max) {
      this.value = this.min
    }
  }

  scrollDown() {
    this.value = - 1
  }


  @Output()
  selected = new Subject<number>()

  pressed(){
    this.selected.next(this.value*this.neg)
  }
 
  neg:number =1
  negative(){
    console.info(">>negative")

    this.neg *= -1
  }

}


