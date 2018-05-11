import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerLevelsComponent } from './power-levels/power-levels.component';
import { HumanComponent } from './power-levels/human/human.component';
import { SaiyanComponent } from './power-levels/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power-levels/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './power-levels/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './power-levels/supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './power-levels/supersaiyanfour/supersaiyanfour.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerLevelsComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
