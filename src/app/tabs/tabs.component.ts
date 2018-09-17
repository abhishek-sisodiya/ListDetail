import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  /*   routeLinks: any[];
    activeLinkIndex = -1;
constructor(private router: Router) {
        this.routeLinks = [
            {
                label: 'Activity',
                link: './product1',
                index: 0
            }, {
                label: 'Segments',
                link: './product2',
                index: 1
            }, {
                label: 'Contact List',
                link: './product3',
                index: 2
            }
        ];
    } */
ngOnInit(): void {
        /* this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        }); */
    }


   /*  activity = true
    segments = false
    contactlist = false

    activity1(){
        this.segments = false
        this.contactlist = false
        this.activity = true
    }
    segments1(){
        this.segments = true
        this.contactlist = false
        this.activity = false
    }
    contactlist1(){
        this.segments = false
        this.contactlist = true
        this.activity = false
    } */

}