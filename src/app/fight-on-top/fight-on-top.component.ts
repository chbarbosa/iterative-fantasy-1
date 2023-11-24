import { Component } from '@angular/core';
import { FightOptionsAbstractComponent } from '../FightOptionsAbstractComponent';

@Component({
  selector: 'app-fight-on-top',
  templateUrl: './fight-on-top.component.html',
  styleUrls: ['./fight-on-top.component.css']
})
export class FightOnTopComponent extends FightOptionsAbstractComponent {

  constructor() {
    super("fightOnTop");
  }

}
