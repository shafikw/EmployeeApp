import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[AuthGuard]  },
  { path: 'userlist', component: UserListComponent,canActivate:[AuthGuard]  },
  { path: 'employeelist', component: EmployeeListComponent,canActivate:[AuthGuard]  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
