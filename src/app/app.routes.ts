import { Routes } from '@angular/router';
import { ManagersListPageComponent } from './pages/managers-list-page/managers-list-page.component';
import { ManagerManagementPageComponent } from './pages/manager-management-page/manager-management-page.component';

export const routes: Routes = [
    { path: "", component: ManagersListPageComponent },
    { path: "manager-management", component: ManagerManagementPageComponent },
];
