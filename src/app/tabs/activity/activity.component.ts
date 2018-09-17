import { Component, OnInit } from '@angular/core';
// import { products } from './products';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  gridData = [];
  ValueFromInputText
  json_object_2

  constructor() {}

  ngOnInit() {
  }

  fromDB(){

    this.json_object_2 = JSON.parse(this.ValueFromInputText);
    console.log(this.json_object_2);
    
    this.fromJSON(this.json_object_2);

  }

  fromJSON(jsonObj){
    this.gridData = [];
    console.log(jsonObj);
    jsonObj.forEach(index => {
 
      this.gridData['ProductID'] = index.ProductID;
      this.gridData['ProductName'] = index.ProductName;
      this.gridData['CategoryName'] = index.CategoryName; 
      
    });
    console.log(this.gridData);
  }

}
