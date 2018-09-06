import { UserNewComponent } from './components/user-new/user-new.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';


const AppRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registrar', component: UserNewComponent}
]
    

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule{}