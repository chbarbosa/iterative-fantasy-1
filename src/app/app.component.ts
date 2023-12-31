import { Component } from '@angular/core';
declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iterative-fantasy-1';

  constructor() {
    if (this.getNight()) {
      this.setDark();
    }
    console.log("ops :" + this.hasNoDecision());
    console.log("night" + this.getNight())
  }

  goTonight() {
    localStorage.setItem("night", "true");
      gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
      'event_category': 'BUTTON_CLICK',
      'event_label': 'Track Me Click',
      'value': 'dark chosed'   });
    this.setDark();
  }

  private setDark() {
    document.body.style.backgroundColor = "#343a40";
    document.body.style.color = "LightGoldenRodYellow";
  }

  goNow() {
    localStorage.setItem("night", "false");
      gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
      'event_category': 'BUTTON_CLICK',
      'event_label': 'Track Me Click',
      'value': 'go now chosed'   });
  }

  hasNoDecision() {
    return localStorage.getItem("night") == undefined;
  }

  getNight() {
    return localStorage.getItem("night") === "true";
  }
  goesImmediately() {
    return localStorage.getItem("night") === "false";
  }
  hasNoWayDecision() {
    return localStorage.getItem("castle") == undefined;
  }
  enterCastle(event: Event) {
    event.preventDefault();
    localStorage.setItem("castle", "true");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'go to castle'   });
  }
  goStrangeOpening(event: Event) {
    event.preventDefault();
    localStorage.setItem("castle", "false");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'go to strange opening'   });
  }
  hasEnteredCastle() {
    return  localStorage.getItem("castle") === "true";
  }
}
