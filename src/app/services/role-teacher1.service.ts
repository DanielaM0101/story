import { Injectable } from '@angular/core';
import { RoleTeacher1 } from '../models/role-teacher';

@Injectable({
  providedIn: 'root'
})
export class RoleTeacher1Service {
  private roleTeacher1: RoleTeacher1

  constructor() {
    this.roleTeacher1 = new RoleTeacher1();
  }

  getRoleTeacher1(): RoleTeacher1 {
    return this.roleTeacher1;
  }
}
