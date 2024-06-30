import { Injectable } from '@angular/core';
import { RoleTeacher2 } from '../models/role-teacher';

@Injectable({
  providedIn: 'root'
})
export class RoleTeacher2Service {
  private roleTeacher2: RoleTeacher2;

  constructor() {
    this.roleTeacher2 = new RoleTeacher2
    
  }

  getRoleTeacher2(): RoleTeacher2 {
    return this.roleTeacher2;
  }
}
