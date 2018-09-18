import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  gridData = [];
  ValueFromInput;
  email;
  firstName;
  middleName;
  lastName;
  title;
  institution;
  item = {};
  ControlIndex = 0;
  json_object_2;

  constructor() { }

  ngOnInit() {
  }


  get() {

    this.item = {};
    this.item["iVal"] = this.ControlIndex;
    this.item["email"] = this.email;
    this.item["firstName"] = this.firstName;
    this.item["middleName"] = this.middleName;
    this.item["lastName"] = this.lastName;
    this.item["title"] = this.title;
    this.item["institution"] = this.institution;
    console.log(this.item);

    this.gridData[this.ControlIndex] = this.item;
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
    let Array_SeqNumber = [];
    console.log(jsonObj);

    this.gridData = jsonObj

    for (let j = 0; j < jsonObj.length; j++) {
     Array_SeqNumber[j] = jsonObj[j].iVal;
    }
    console.log(Array_SeqNumber);

    let MaxOfControlIndex = Math.max.apply(Math, Array_SeqNumber);
    this.ControlIndex = MaxOfControlIndex + 1;

  }


}
