import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './listDetail/tabs/activity/activity.component';
import { SegmentsComponent } from './listDetail/tabs/segments/segments.component';
import { ContactlistComponent } from './listDetail/tabs/contactlist/contactlist.component';
import { TabsListManagerComponent } from './listManager/tabs-list-manager/tabs-list-manager.component';
import { HeaderListManagerComponent } from './listManager/header-list-manager/header-list-manager.component';

const routes: Routes = [
    /* {
        path: '',
        redirectTo: '/activity',
        pathMatch: 'full'
    }, */
    
    {
        path: '',
        redirectTo: '/headerListManager',
        pathMatch: 'full'
    },
    { path: 'headerListManager', component: HeaderListManagerComponent },
    
    { path: 'activity', component: ActivityComponent },
    { path: 'segments', component: SegmentsComponent },
    { path: 'contactlist', component: ContactlistComponent },
    { path: '**', redirectTo: '/activity', pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }