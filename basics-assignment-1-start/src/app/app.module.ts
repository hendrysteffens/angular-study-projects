import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppWarningComponent } from './app-warning/app-warning.component';
import { AppSuccessComponent } from './app-success/app-success.component';
import { AppShowComponentsComponent } from './app-show-components/app-show-components.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWarningComponent,
    AppSuccessComponent,
    AppShowComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
