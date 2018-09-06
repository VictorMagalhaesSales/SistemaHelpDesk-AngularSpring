import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './components/security/auth.guard';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule  } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { UserNewComponent } from './components/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,  
    LoginComponent, UserNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
   // MAATERIAL DESIGN FOR BOOTSTRAP - ANGULAR
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    UserService,
    SharedService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
