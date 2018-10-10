import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app.routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabModule } from 'angular-tabs-component';
import { TabsComponent } from './listDetail/tabs/tabs.component';
import { HeaderComponent } from './listDetail/header/header.component';
import { ActivityComponent } from './listDetail/tabs/activity/activity.component';
import { SegmentsComponent } from './listDetail/tabs/segments/segments.component';
import { ContactlistComponent } from './listDetail/tabs/contactlist/contactlist.component';
import { TabsListManagerComponent } from './listManager/tabs-list-manager/tabs-list-manager.component';
import { HeaderListManagerComponent } from './listManager/header-list-manager/header-list-manager.component';

import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { MenuModule } from '@progress/kendo-angular-menu';






@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    ActivityComponent,
    SegmentsComponent,
    ContactlistComponent,
    TabsListManagerComponent,
    HeaderListManagerComponent
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
    GridModule,
    DialogsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
