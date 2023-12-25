import { Component, OnInit } from '@angular/core';

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
  }
  useSword(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "sword");
  }
  useBesta(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "besta");
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }

}
