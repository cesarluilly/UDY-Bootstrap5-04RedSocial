import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedSocialModule } from './red-social/red-social.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RedSocialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
