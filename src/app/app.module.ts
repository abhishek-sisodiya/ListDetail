import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app.routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabModule } from 'angular-tabs-component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './tabs/activity/activity.component';
import { SegmentsComponent } from './tabs/segments/segments.component';
import { ContactlistComponent } from './tabs/contactlist/contactlist.component';

import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';




@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    ActivityComponent,
    SegmentsComponent,
    ContactlistComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    RouterModule,
    CommonModule,
    TabModule,
    CdkTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
