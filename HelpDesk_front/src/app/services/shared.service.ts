import { UserModel } from './../model/user.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance : SharedService = null;
  user: UserModel;
  token: string;
  showTempalte = new EventEmitter<boolean>();

  constructor() {
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
      
    }
    return this.user.email != '';
  }
}
