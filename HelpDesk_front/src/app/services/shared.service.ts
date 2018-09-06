import { UserModel } from './../model/user.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance : SharedService = null;
  user: UserModel;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor(token?: string, user?: UserModel){
    if(token != null){
      this.user = user;
      this.token = token;
    }
    return SharedService.instance = SharedService.instance || this;
    
  }
  
  public static getInstance(){
    if(this.instance = null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn():boolean{
    if(this.user == null){
      return false;
    }
    return this.user.email != '';
  }

  setLogin(token: string, user: UserModel){
    this.token = token;
    this.user = user;
  }

  emitirTrue(){
    this.showTemplate.emit(true);
    //console.log("emitindo true");
  }

  emitirFalse(){
    this.showTemplate.emit(false);
    //console.log("emitindo false");
  }
}
