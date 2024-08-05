import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'list',
        loadChildren: () => import('./home/list-user/list-user.module').then(m => m.ListUserModule),
    }
];
