import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteringCastleComponent } from './entering-castle/entering-castle.component';
import { StrangeOpeningComponent } from './strange-opening/strange-opening.component';
import { EnteringNextRoomComponent } from './entering-next-room/entering-next-room.component';
import { GoingUpComponent } from './going-up/going-up.component';
import { FightOnTopComponent } from './fight-on-top/fight-on-top.component';
import { RunFromComponent } from './run-from/run-from.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteringCastleComponent,
    StrangeOpeningComponent,
    EnteringNextRoomComponent,
    GoingUpComponent,
    FightOnTopComponent,
    RunFromComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
