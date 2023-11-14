import { Component } from '@angular/core';

@Component({
  selector: 'app-fight-on-top',
  templateUrl: './fight-on-top.component.html',
  styleUrls: ['./fight-on-top.component.css']
})
export class FightOnTopComponent {
  private readonly actionRef: string = "fightOnTop";
  hasRun(): any {
    return  localStorage.getItem(this.actionRef) === "run";
  }
  hasUsedSword(): any {
    return  localStorage.getItem(this.actionRef) === "sword";
  }
  hasUsedBesta(): any {
    return  localStorage.getItem(this.actionRef) === "besta";
  }
  run() {
    localStorage.setItem(this.actionRef, "run");
  }
  useSword() {
    localStorage.setItem(this.actionRef, "sword");
  }
  useBesta() {
    localStorage.setItem(this.actionRef, "besta");
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }

}
