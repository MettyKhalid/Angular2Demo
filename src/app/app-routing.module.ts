import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:code', component: EmployeeComponent },
  { path: 'createemployee', component: CreateEmployeeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
