import { Component } from '@angular/core';

@Component({
  selector: 'app-going-up',
  templateUrl: './going-up.component.html',
  styleUrls: ['./going-up.component.css']
})
export class GoingUpComponent {
  private readonly actionRef: string = "nextGoingUp";
  hasGoneLeft(): any {
    return localStorage.getItem(this.actionRef) === "left";
  }
  hasGoneRight(): any {
    return localStorage.getItem(this.actionRef) === "right";
  }
  goLeft() {
    localStorage.setItem(this.actionRef, "left");
  }
  goRight() {
    localStorage.setItem(this.actionRef, "right");
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }

}
