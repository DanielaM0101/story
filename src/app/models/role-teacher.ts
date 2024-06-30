export class RoleTeacher1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de profesor es fundamental en el contexto de la ciudad.",
      "RolePolice está involucrado en: Descripción del RolePolice",
      "RolePolice realiza actividades ilegales como: Actividad ilegal 1, Actividad ilegal 2."
    ];
  
    constructor(
      public name: string = 'Ing.Pedro',
      public description: string = '',
      public illegalActivities: string[] = ['Actividad ilegal 1', 'Actividad ilegal 2']
    ) {}
  
    introduce(): string {
      return this.storyParts[0];
    }
  
    displayDescription(): string {
      if (this.storyIndex >= 1) {
        return this.storyParts[1];
      } else {
        return '';
      }
    }
  
    displayIllegalActivities(): string {
      if (this.storyIndex >= 2) {
        return this.storyParts[2];
      } else {
        return '';
      }
    }
  
    displayNextPart(): string {
      if (this.storyIndex < this.storyParts.length) {
        return this.storyParts[this.storyIndex++];
      } else {
        return 'Fin de la historia.';
      }
    }
  
    resetStoryIndex(): void {
      this.storyIndex = 0;
    }
  }
  
  export class RoleTeacher2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de Profesor es fundamental en el contexto de la ciudad.",
      "RolePolice está involucrado en: Descripción del RolePolice",
      "RolePolice realiza actividades ilegales como: Actividad ilegal 1, Actividad ilegal 2."
    ];
  
    constructor(
      public name: string = 'Ing.Fabi',
      public description: string = '',
      public illegalActivities: string[] = ['Actividad ilegal 1', 'Actividad ilegal 2']
    ) {}
  
    introduce(): string {
      return this.storyParts[0];
    }
  
    displayDescription(): string {
      if (this.storyIndex >= 1) {
        return this.storyParts[1];
      } else {
        return '';
      }
    }
  
    displayIllegalActivities(): string {
      if (this.storyIndex >= 2) {
        return this.storyParts[2];
      } else {
        return '';
      }
    }
  
    displayNextPart(): string {
      if (this.storyIndex < this.storyParts.length) {
        return this.storyParts[this.storyIndex++];
      } else {
        return 'Fin de la historia.';
      }
    }
  
    resetStoryIndex(): void {
      this.storyIndex = 0;
    }
  }