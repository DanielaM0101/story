export class RoleTeen1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      " Kevin es fundamental en las ventas del daeler.",
      " Kevin  está involucrado en: Compra de sustancias",
      " Kevin realiza actividades ilegales como: consumo de sustancias , robar dinero ."
    ];
  
    constructor(
      public name: string = 'Kevin',
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
      this.storyIndex = 0; // Reinicia el índice de la historia
    }
  }
  
  export class RoleTeen2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "Brayan es fundamental en el contexto de la ciudad.",
      "Brayan está involucrado en: Descripción del RoleTeen",
      "Brayan realiza actividades ilegales como: Actividad ilegal 1, Actividad ilegal 2."
    ];
  
    constructor(
      public name: string = 'Brayan',
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
  