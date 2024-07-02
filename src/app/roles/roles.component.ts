import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RoleDealer1Service } from '../services/role-dealer2.service';
import { RoleDealer2Service } from '../services/role-dealer1.service';
import { RoleDealer1 } from '../models/role-dealers';
import { RoleDealer2 } from '../models/role-dealers';
import { RoleDoctor1Service } from '../services/role-doctor1.service';
import { RoleDoctor2Service } from '../services/role-doctor2.service';
import { RoleDoctor1, RoleDoctor2 } from '../models/role-doctor';
import { RoleFriend1Service } from '../services/role-friend1.service';
import { RoleFriend2Service } from '../services/role-friend2.service';
import { RoleFriend1, RoleFriend2 } from '../models/role-friend';
import { RoleNarco1Service } from '../services/role.narco1.service';
import { RoleNarco2Service } from '../services/role-narco2.service';
import { RoleNarco1, RoleNarco2 } from '../models/role-narco';
import { RolePolice1Service } from '../services/role-police1.service';
import { RolePolice2Service } from '../services/role.police2.service';
import { RolePolice1, RolePolice2 } from '../models/role-police';
import { RoleTeacher1Service } from '../services/role-teacher1.service';
import { RoleTeacher2Service } from '../services/role-teacher2.service';
import { RoleTeacher1, RoleTeacher2 } from '../models/role-teacher';
import { RoleTeen1Service } from '../services/role-teen1.service';
import { RoleTeen2Service } from '../services/role.teen2.service';
import { RoleTeen1, RoleTeen2 } from '../models/role-teen';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzGridModule
  ],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {      //clase q tiene varias propiedades q representa un rol
  roleDealer1: RoleDealer1 | undefined;
  roleDealer2: RoleDealer2 | undefined;
  roleDoctor1: RoleDoctor1 | undefined;
  roleDoctor2: RoleDoctor2 | undefined;
  roleFriend1: RoleFriend1 | undefined;
  roleFriend2: RoleFriend2 | undefined;
  roleNarco1: RoleNarco1 | undefined;
  roleNarco2: RoleNarco2 | undefined;
  rolePolice1: RolePolice1 | undefined;
  rolePolice2: RolePolice2 | undefined;
  roleTeacher1: RoleTeacher1 | undefined;
  roleTeacher2: RoleTeacher2 | undefined;
  roleTeen1: RoleTeen1 | undefined;
  roleTeen2: RoleTeen2 | undefined;

  currentStoryPartDealer1: string | null = null;     //propiedAD QUE ALMACENA LA story
  currentStoryPartDealer2: string | null = null;
  currentStoryPartDoctor1: string | null = null;
  currentStoryPartDoctor2: string | null = null;
  currentStoryPartFriend1: string | null = null;
  currentStoryPartFriend2: string | null = null;
  currentStoryPartNarco1: string | null = null;
  currentStoryPartNarco2: string | null = null;
  currentStoryPartPolice1: string | null = null;
  currentStoryPartPolice2: string | null = null;
  currentStoryPartTeacher1: string | null = null;
  currentStoryPartTeacher2: string | null = null;
  currentStoryPartTeen1: string | null = null;
  currentStoryPartTeen2: string | null = null;

  constructor(
    private roleDealer1Service: RoleDealer1Service,  // inyecta instancias de services
    private roleDealer2Service: RoleDealer2Service,
    private roleDoctor1Service: RoleDoctor1Service,
    private roleDoctor2Service: RoleDoctor2Service,
    private roleFriend1Service: RoleFriend1Service,
    private roleFriend2Service: RoleFriend2Service,
    private roleNarco1Service: RoleNarco1Service,
    private roleNarco2Service: RoleNarco2Service,
    private rolePolice1Service: RolePolice1Service,
    private rolePolice2Service: RolePolice2Service,
    private roleTeacher1Service: RoleTeacher1Service,
    private roleTeacher2Service: RoleTeacher2Service,
    private roleTeen1Service: RoleTeen1Service,
    private roleTeen2Service: RoleTeen2Service,

  ) { }

  ngOnInit(): void {
    this.roleDealer1 = this.roleDealer1Service.getRoleDealer1();    //este componente inicisliza cada propiedad
    this.roleDealer2 = this.roleDealer2Service.getRoleDealer2();     //cada propiedad del rol llamando al metodo get
    this.roleDoctor1 = this.roleDoctor1Service.getRoleDoctor1();
    this.roleDoctor2 = this.roleDoctor2Service.getRoleDoctor2();
    this.roleFriend1 = this.roleFriend1Service.getRoleFriend1();
    this.roleFriend2 = this.roleFriend2Service.getRoleFriend2();
    this.roleNarco1 = this.roleNarco1Service.getRoleNarco1();
    this.roleNarco2 = this.roleNarco2Service.getRoleNarco2();
    this.rolePolice1 = this.rolePolice1Service.getRolePolice1();
    this.rolePolice2 = this.rolePolice2Service.getRolePolice2();
    this.roleTeacher1 = this.roleTeacher1Service.getRoleTeacher1();
    this.roleTeacher2 = this.roleTeacher2Service.getRoleTeacher2();
    this.roleTeen1 = this.roleTeen1Service.getRoleTeen1();
    this.roleTeen2 = this.roleTeen2Service.getRoleTeen2();
  }

  displayNextPart(role: any): void {
    if (role instanceof RoleDealer1) {
      this.currentStoryPartDealer1 = this.roleDealer1?.displayNextPart() ?? null;
    } else if (role instanceof RoleDealer2) {
      this.currentStoryPartDealer2 = this.roleDealer2?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleDoctor1) {
      this.currentStoryPartDoctor1 = this.roleDoctor1?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleDoctor2) {
      this.currentStoryPartDoctor2 = this.roleDoctor2?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleFriend1) {
      this.currentStoryPartFriend1 = this.roleFriend1?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleFriend2) {
      this.currentStoryPartFriend2 = this.roleFriend2?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleNarco1) {
     this.currentStoryPartNarco1 = this.roleNarco1?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleNarco2) {
     this.currentStoryPartNarco2 = this.roleNarco2?.displayNextPart() ?? null;
    }
    else if (role instanceof RolePolice1) {
    this.currentStoryPartPolice1 = this.rolePolice1?.displayNextPart() ?? null;
    }
    else if (role instanceof RolePolice2) {
    this.currentStoryPartPolice2 = this.rolePolice2?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleTeacher1) {
    this.currentStoryPartTeacher1 = this.roleTeacher1?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleTeacher2) {
    this.currentStoryPartTeacher2 = this.roleTeacher2?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleTeen1) {
    this.currentStoryPartTeen1 = this.roleTeen1?.displayNextPart() ?? null;
    }
    else if (role instanceof RoleTeen2) {
    this.currentStoryPartTeen2 = this.roleTeen2?.displayNextPart() ?? null;
    }
    

    
    
  }


  resetRoleStory(role: any): void {
    if (role instanceof RoleDealer1) {
      this.roleDealer1?.resetStoryIndex();
      this.currentStoryPartDealer1 = null;
    } else if (role instanceof RoleDealer2) {
      this.roleDealer2?.resetStoryIndex();
      this.currentStoryPartDealer2 = null;
    }
    else if (role instanceof RoleDoctor1) {
      this.roleDoctor1?.resetStoryIndex();
      this.currentStoryPartDoctor1 = null;
    }
      else if (role instanceof RoleDoctor2) {
      this.roleDoctor2?.resetStoryIndex();
      this.currentStoryPartDoctor2 = null;
    }
    else if (role instanceof RoleFriend1) {
      this.roleFriend1?.resetStoryIndex();
      this.currentStoryPartFriend1 = null;
    }
    else if (role instanceof RoleFriend2) {
      this.roleFriend2?.resetStoryIndex();
      this.currentStoryPartFriend2 = null;
    }
    else if (role instanceof RoleNarco1) {
      this.roleNarco1?.resetStoryIndex();
      this.currentStoryPartNarco1 = null;
    }
    else if (role instanceof RoleNarco2) {
      this.roleNarco2?.resetStoryIndex();
      this.currentStoryPartNarco2 = null;
    }
    else if (role instanceof RolePolice1) {
      this.rolePolice1?.resetStoryIndex();
      this.currentStoryPartPolice1 = null;
    }
    else if (role instanceof RolePolice2) {
      this.rolePolice2?.resetStoryIndex();
      this.currentStoryPartPolice2 = null;
    }
    else if (role instanceof RoleTeacher1) {
      this.roleTeacher1?.resetStoryIndex();
      this.currentStoryPartTeacher1 = null;
    }
    else if (role instanceof RoleTeacher2) {
      this.roleTeacher2?.resetStoryIndex();
      this.currentStoryPartTeacher2 = null;
    }
    else if (role instanceof RoleTeen1){
      this.roleTeen1?.resetStoryIndex();
      this.currentStoryPartTeen1 = null;
    }
    else if (role instanceof RoleTeen2){
      this.roleTeen2?.resetStoryIndex();
      this.currentStoryPartTeen2 = null;
    }
    

  }
}
