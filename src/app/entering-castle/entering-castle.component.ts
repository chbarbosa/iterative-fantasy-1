import { Component } from '@angular/core';

@Component({
  selector: 'app-entering-castle',
  templateUrl: './entering-castle.component.html',
  styleUrls: ['./entering-castle.component.css']
})
export class EnteringCastleComponent {
  climbStairs() {
    localStorage.setItem("nextRoom", "not");
  }
  hasGoneNextRoom() {
    return  localStorage.getItem("nextRoom") === "true";
  }
  hasClimbed() {
    return  localStorage.getItem("nextRoom") === "not";
  }
  goNextRoom() {
    localStorage.setItem("nextRoom", "true");
  }
  hasNoDecision() {
    return localStorage.getItem("nextRoom") == undefined;
  }

}
