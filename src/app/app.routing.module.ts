import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './tabs/activity/activity.component';
import { SegmentsComponent } from './tabs/segments/segments.component';
import { ContactlistComponent } from './tabs/contactlist/contactlist.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/product1',
        pathMatch: 'full'
    },
    { path: 'product1', component: ActivityComponent },
    { path: 'product2', component: SegmentsComponent },
    { path: 'product3', component: ContactlistComponent },
    { path: '**', redirectTo: '/product1', pathMatch: 'full' }
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