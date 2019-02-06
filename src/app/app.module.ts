import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeZoneListComponent } from './time-zone-list/time-zone-list.component';
import { CreateTimeZoneComponent } from './create-time-zone/create-time-zone.component';
import { EditTimeComponent } from './edit-time/edit-time.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeZoneListComponent,
    CreateTimeZoneComponent,
    EditTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
