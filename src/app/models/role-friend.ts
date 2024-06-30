export class RoleFriend1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "Fundamental en el contexto de la ciudad.",
      "Está involucrado en:  Grupo delictivo",
      "Realiza actividades ilegales como: Robo, Vandalismo."
    ];
  
    constructor(
      public name: string = 'Pool',
      public description: string = '',
      public illegalActivities: string[] = ['Robo', 'Vandalismo']
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
  
  export class RoleFriend2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "Fundamental en el contexto de la ciudad.",
      "Está involucrado en: x",
      "Realiza actividades ilegales como: Robo, Vandalismo."
    ];
  
    constructor(
      public name: string = 'Galo',
      public description: string = '',
      public illegalActivities: string[] = ['Robo', 'Vandalismo']
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
  