import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteringCastleComponent } from './entering-castle/entering-castle.component';
import { StrangeOpeningComponent } from './strange-opening/strange-opening.component';
import { EnteringNextRoomComponent } from './entering-next-room/entering-next-room.component';
import { ClimbingStairsComponent } from './climbing-stairs/climbing-stairs.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteringCastleComponent,
    StrangeOpeningComponent,
    EnteringNextRoomComponent,
    ClimbingStairsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
