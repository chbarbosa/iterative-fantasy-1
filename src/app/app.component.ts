import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iterative-fantasy-1';
  enteringCastle: boolean = false;
  night: boolean = localStorage.getItem("night") === "true";

  constructor() {
    if (this.night) {      
      this.setDark();
    }
  }

  goTonight() {
    alert("ir à noite!");
    this.night = true;
    localStorage.setItem("night", "true");
    this.setDark();
  }

  private setDark() {
    document.body.style.backgroundColor = "#343a40";
    document.body.style.color = "LightGoldenRodYellow";
  }

  goNow() {    
    if(confirm("Confirma?")) {
      alert("ir imediatamente!");
      this.night = false;
      localStorage.setItem("night", "false");
    } 
  }

  goCastle() {
    this.enteringCastle = true;
  }

  noGoCastle() {
    this.enteringCastle = false;
  }
}
