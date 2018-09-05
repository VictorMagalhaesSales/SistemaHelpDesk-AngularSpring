import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance : SharedService = null;

  constructor() { }
}
