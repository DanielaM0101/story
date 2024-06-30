import { Injectable } from '@angular/core';
import { RoleTeen2 } from '../models/role-teen';
@Injectable({
  providedIn: 'root'
})
export class RoleTeen2Service {
  private roleTeen2: RoleTeen2;

  constructor() {
    this.roleTeen2 = new RoleTeen2
   

    }
  getRoleTeen2(): RoleTeen2 {
    return this.roleTeen2;
  }
}
