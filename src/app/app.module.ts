import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng7ConfirmModule } from './dist/ng7-confirm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7ConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
