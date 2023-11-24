import { Component } from '@angular/core';
import { FightOptionsAbstractComponent } from '../FightOptionsAbstractComponent';

@Component({
  selector: 'app-strange-opening',
  templateUrl: './strange-opening.component.html',
  styleUrls: ['./strange-opening.component.css']
})
export class StrangeOpeningComponent extends FightOptionsAbstractComponent {

  constructor() {
    super("goDown");
  }

}
