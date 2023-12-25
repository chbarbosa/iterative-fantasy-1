import { Component, OnInit } from '@angular/core';
declare var gtag: Function;

@Component({
  selector: 'app-entering-next-room',
  templateUrl: './entering-next-room.component.html',
  styleUrls: ['./entering-next-room.component.css']
})
export class EnteringNextRoomComponent {
  private readonly actionRef: string = "nextRoomAction";
  hasRun(): any {
    return  localStorage.getItem(this.actionRef) === "run";
  }
  hasUsedSword(): any {
    return  localStorage.getItem(this.actionRef) === "sword";
  }
  hasUsedBesta(): any {
    return  localStorage.getItem(this.actionRef) === "besta";
  }
  run(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "run");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'run at next room'   });
  }
  useSword(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "sword");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'sword at new room'   });
  }
  useBesta(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "besta");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'besta at next room'   });
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }

}
