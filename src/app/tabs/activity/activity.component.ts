import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  // gridData = products;
  gridData = []
  ValueFromInput;
  log;
  by;
  date;
  item = {}
  ControlIndex = 0
  json_object_2

  constructor() { }

  ngOnInit() {
  }



  get() {

    this.item = {}
    this.item["iVal"] = this.ControlIndex
    this.item["activityLog"] = this.log
    this.item["modifiedBy"] = this.by
    this.item["modifiedDate"] = this.date
    console.log(this.item);

    this.gridData[this.ControlIndex] = this.item
    console.log(this.gridData);
    this.ControlIndex++;
  }


  fromDB() {

    this.json_object_2 = JSON.parse(this.ValueFromInput);
    console.log(this.ValueFromInput);

    this.fromJSON(this.json_object_2);

    /*     this.gridData = this.ValueFromInput;
        console.log(this.gridData); */
  }

  fromJSON(jsonObj) {
    let Array_SeqNumber = []
    console.log(jsonObj);

    this.gridData = jsonObj

    for (let j = 0; j < jsonObj.length; j++) {
     Array_SeqNumber[j] = jsonObj[j].iVal
    }
    console.log(Array_SeqNumber)

    let MaxOfControlIndex = Math.max.apply(Math, Array_SeqNumber);
    this.ControlIndex = MaxOfControlIndex + 1;

  }

}
