import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { RobotCollectionsComponent } from './core/components/robot-collections/robot-collections.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/robots',
        pathMatch: 'full'
    },
    {
        path: 'robots',
        component: HomeComponent
    },
    {
        path: 'robots/collections',
        component: RobotCollectionsComponent
    },
    {
        path: '**',
        redirectTo: '/robots'
    }
];
