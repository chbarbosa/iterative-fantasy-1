import { Component, OnInit } from '@angular/core';
declare var gtag: Function;

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
  goLeft(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "left");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'go left chosed'   });
  }
  goRight(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "right");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'go right chosed'   });
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }

}
