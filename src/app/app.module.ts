import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfridgeDetailsComponent } from './myfridgelst/myfridge-details/myfridge-details.component';
import { MyfridgeListComponent } from './myfridgelst/myfridge-list/myfridge-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfridgeDetailsComponent,
    MyfridgeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
