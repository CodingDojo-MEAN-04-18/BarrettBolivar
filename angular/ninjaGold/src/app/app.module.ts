import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { DeltaComponent } from './delta/delta.component';

import { GoldService } from './gold.service';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    DeltaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
