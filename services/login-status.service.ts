import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  hasLogin :boolean = false;
  getStatus(){
    return this.hasLogin;
  }
  setStatus(status:boolean){
    this.hasLogin = status;
  }
  constructor() { }
}
