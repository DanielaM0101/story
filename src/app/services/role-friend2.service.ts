import { Injectable } from '@angular/core';
import { RoleFriend2 } from '../models/role-friend';

@Injectable({
  providedIn: 'root'
})
export class RoleFriend2Service {
  private roleFriend1: RoleFriend2;
  
  constructor() {
    this.roleFriend1 = new RoleFriend2();
   }



  getRoleFriend2(): RoleFriend2{
    return this.roleFriend1;
  }
}
