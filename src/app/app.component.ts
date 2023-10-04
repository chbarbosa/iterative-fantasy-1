import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iterative-fantasy-1';
  enteringCastle: boolean = false;

  constructor() {
    if (this.getNight()) {      
      this.setDark();
    }
    console.log("ops :" + this.hasNoDecision());
    console.log("night" + this.getNight())
  }

  goTonight() {
    localStorage.setItem("night", "true");
    this.setDark();
  }

  private setDark() {
    document.body.style.backgroundColor = "#343a40";
    document.body.style.color = "LightGoldenRodYellow";
  }

  goNow() {    
    if(confirm("Confirma?")) {
      localStorage.setItem("night", "false");
    } 
  }

  goCastle() {
    this.enteringCastle = true;
  }

  noGoCastle() {
    this.enteringCastle = false;
  }

  hasNoDecision() {
    return localStorage.getItem("night") == undefined;
  }

  getNight() {
    return  localStorage.getItem("night") === "true";
  }
}
