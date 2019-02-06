import { Component, OnInit } from '@angular/core';
import { TimeZone } from '../share/time-zone-model';



import * as moment from 'moment-timezone';


@Component({
  selector: 'app-time-zone-list',
  templateUrl: './time-zone-list.component.html',
  styleUrls: ['./time-zone-list.component.css']
})
export class TimeZoneListComponent implements OnInit {

 now: Date;
 timeZoneList: TimeZone [] = [];
 editMode = false;
 listItem: TimeZone;
 selectedListItem: TimeZone;
 selectedItem: string;
 today = new Date;
 changedArray: TimeZone [] = [];
 newTZ: Date;

  constructor() { }

  ngOnInit() {
    if (!this.editMode) {
    this.now = moment(new Date());
    const firstLocalItem = this.createTime(this.now, moment.tz.guess());
    const secondGMTItem = this.createTime(this.now, 'GMT');
    this.timeZoneList.push(firstLocalItem, secondGMTItem);
    } else {
      this.now = this.newTZ;
    }
  }

  private createTime(selectedTime, zone) {
   const createdItem = {
     timeNow: selectedTime.tz(zone).format('HH z')
    };
    return createdItem;
  }

  getTimeList() {
    return this.timeZoneList;
  }
  newZoneCreated(timeZone) {
     const newZoneItem = this.createTime(this.now, timeZone);
     this.timeZoneList.push(newZoneItem);
  }
  onEditItem(timeItem, index) {
    this.editMode = true;
    this.selectedItem = timeItem.timeNow;
  }

   timeChanged(createdTime) {
      const selectedGMT = this.selectedItem.toString().slice(3, 7);
      this.newTZ = moment.tz(`2019-12-01 ${createdTime}:00`, selectedGMT);

      this.timeZoneList.forEach((times, i) => {
      const zone = this.timeZoneList[i].timeNow.toString().slice(3, 6);
      this.changedArray.push(this.createTime(this.newTZ, zone));
     });

      this.timeZoneList = this.changedArray;
      this.changedArray = [];
      this.editMode = false;
   }

}

