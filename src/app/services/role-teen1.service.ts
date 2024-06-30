import { Injectable } from '@angular/core';
import { RoleTeen1 } from '../models/role-teen';
@Injectable({
  providedIn: 'root'
})
export class RoleTeen1Service {
  private roleTeen1: RoleTeen1;

  constructor() {
    this.roleTeen1 = new RoleTeen1
      
  }

  getRoleTeen1(): RoleTeen1 {
    return this.roleTeen1;
  }
}
