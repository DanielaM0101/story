import { Injectable } from '@angular/core';
import { RoleFriend1 } from '../models/role-friend';

@Injectable({
  providedIn: 'root'
})
export class RoleFriend1Service {
  private roleFriend1: RoleFriend1;
  
  constructor() {
    this.roleFriend1 = new RoleFriend1();
   }



  getRoleFriend1(): RoleFriend1{
    return this.roleFriend1;
  }
}
