import { Component, OnInit } from '@angular/core';

import {
  DialogService,
  DialogRef,
  DialogCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  gridData = [];
  ValueFromInput;
  activityLog;
  modifiedBy;
  modifiedDate;
  item = {};
  ControlIndex = 0;
  json_object_2;
  public dialogOpened = false;
  public result;
  items = [{ text: '...', 
  items: [{ text: 'Delete' },{ text: 'Download' },]}]

  constructor(private dialogService: DialogService) { }



  ngOnInit() {
  }

  /* public open(component) {
    this[component + 'Opened'] = true;
  }
  public close(component) {
    this[component + 'Opened'] = false;
  }
  public action(status) {

    this.dialogOpened = false;

  } */



  public removeHandler(dataItem) {

    if(dataItem.item.text == '...' || dataItem.item.text == 'Download'){
      return false;
    }


    let x = dataItem.sender.itemsService.idPrefix.substring(6);
    
    console.log(x);

    const dialog: DialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: 'Are you sure you want to delete row '+x,
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

   /*  dialog.result.subscribe((result) => {

      this.result = result['text'];

      if (this.result == "Yes") {

        this.gridData[x] = ""

        let newArray = new Array();
        for (var i = 0; i < this.gridData.length; i++) {
          if (this.gridData[i]) {
            newArray.push(this.gridData[i]);
          }
        }

        
        
        this.gridData = newArray
        this.ControlIndex--

      }
    }); */
  }



  get() {

    this.item = {};
    this.item["iVal"] = this.ControlIndex;
    this.item["activityLog"] = this.activityLog;
    this.item["modifiedBy"] = this.modifiedBy;
    this.item["modifiedDate"] = this.modifiedDate;

    this.gridData[this.ControlIndex] = this.item;
    this.ControlIndex++;

    console.log(this.gridData);
    
  }


  fromDB() {

    this.json_object_2 = JSON.parse(this.ValueFromInput);
    this.fromJSON(this.json_object_2);

    /*     this.gridData = this.ValueFromInput;
        console.log(this.gridData); */
  }

  fromJSON(jsonObj) {
    let Array_SeqNumber = [];
    this.gridData = jsonObj;

    for (let j = 0; j < jsonObj.length; j++) {
      Array_SeqNumber[j] = jsonObj[j].iVal;
    }

    let MaxOfControlIndex = Math.max.apply(Math, Array_SeqNumber);
    this.ControlIndex = MaxOfControlIndex + 1;

  }

}
