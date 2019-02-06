import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-create-time-zone',
  templateUrl: './create-time-zone.component.html',
  styleUrls: ['./create-time-zone.component.css']
})
export class CreateTimeZoneComponent implements OnInit {
  form: FormGroup;
  timeZones: string [];
  networkingErr = false;
  constructor() { }

  @Output() newZoneCreated = new EventEmitter<{timeZone}>();

  ngOnInit() {
    this.getTimeZones();
    this.form = new FormGroup({
      'timeZone': new FormControl(null, [
        Validators.required
      ]),
    });
  }

 getTimeZones() {
   this.timeZones =  moment.tz.names();
 }
 onSubmit(timeZone) {
   timeZone = this.form.value.timeZone;
   this.newZoneCreated.emit(timeZone);
   this.form.reset();
 }
}



