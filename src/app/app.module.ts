import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteringCastleComponent } from './entering-castle/entering-castle.component';
import { StrangeOpeningComponent } from './strange-opening/strange-opening.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteringCastleComponent,
    StrangeOpeningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
