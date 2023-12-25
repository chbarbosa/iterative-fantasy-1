import { ViewportScroller } from '@angular/common';
import { AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
declare var gtag: Function;

@Component({
  selector: 'app-entering-castle',
  templateUrl: './entering-castle.component.html',
  styleUrls: ['./entering-castle.component.css']
})
export class EnteringCastleComponent {
  climbStairs(event: Event) {
    event.preventDefault();
    localStorage.setItem("nextRoom", "not");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'go now chosed'   });
  }
  hasGoneNextRoom() {
    return  localStorage.getItem("nextRoom") === "true";
  }
  hasClimbed() {
    return  localStorage.getItem("nextRoom") === "not";
  }
  goNextRoom(event: Event) {
    event.preventDefault();
    localStorage.setItem("nextRoom", "true");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'go to next room'   });
  }
  hasNoDecision() {
    return localStorage.getItem("nextRoom") == undefined;
  }

}
