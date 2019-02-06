import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.css']
})
export class EditTimeComponent implements OnInit {
@Input() timeItem: string;
@Output() timeChanged = new EventEmitter<{createdTime}>();

form: FormGroup;


  constructor() {  }

  ngOnInit() {
    this.form = new FormGroup({
      'newTime': new FormControl(null, [
        Validators.required
      ]),
    });
    this.form.setValue({
      newTime: this.timeItem.slice(0, 2)
    });
    console.log( typeof this.timeItem.slice(0, 2));
  }
  onSubmit(createdTime) {
    createdTime = this.form.value.newTime;
     this.timeChanged.emit(createdTime);
    this.form.reset();
  }
}
