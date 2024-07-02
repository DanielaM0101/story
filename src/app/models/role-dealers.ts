
export class RoleDealer1  {      // clase la matriz  parts
    private storyIndex: number = 0;
    private storyParts: string[] = [
      " Los Dealers son fundamentales en las ventas de la ciudad.",
      " Están involucrados en: las ventas",
      " Realizan actividades ilegales como: Venta de drogas, Contrabando."
    ];
  
    constructor(                           // que tiene tres parametros estos inicializn las 
      public name: string = 'Pepe',        // las propiedades de la clase estas tienen 4 metodos
      public description: string = '',
      public illegalActivities: string[] = ['Venta de drogas', 'Contrabando']
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
  
    resetStoryIndex(): void {                    //metodo  que vuelve a iniciar story parts
      this.storyIndex = 0;
    }
  }
  
  export class RoleDealer2  {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      " La vida de un Dealer está llena de riesgos.",
      "Están constantemente en alerta.",
      " Su día a día incluye: Negociaciones peligrosas, Evasión de la ley."
    ];
  
    constructor(
      public name: string = 'TOTO',
      public description: string = '',
      public illegalActivities: string[] = ['Negociaciones peligrosas', 'Evasión de la ley']
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
  