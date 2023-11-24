import { Component } from '@angular/core';
import { FightOptionsAbstractComponent } from '../FightOptionsAbstractComponent';

@Component({
  selector: 'app-run-from',
  templateUrl: './run-from.component.html',
  styleUrls: ['./run-from.component.css']
})
export class RunFromComponent extends FightOptionsAbstractComponent {

  constructor() {
    super("runFrom");
  }

}
