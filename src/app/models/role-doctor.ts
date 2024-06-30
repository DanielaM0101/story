// src/app/models/role-doctor1.model.ts
export class RoleDoctor1 {
  private storyIndex: number = 0;
  private storyParts: string[] = [
    "El rol de Doctor es fundamental en el contexto de la ciudad.",
    " Está involucrado en: Atender a los narcos",
    "Eealiza actividades ilegales como: Experimentación ilegal, Tráfico de medicamentos."
  ];

  constructor(
    public name: string = 'Doc. Frin',
    public description: string = '',
    public illegalActivities: string[] = ['Experimentación ilegal', 'Tráfico de medicamentos']
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

// src/app/models/role-doctor2.model.ts
export class RoleDoctor2 {
  private storyIndex: number = 0;
  private storyParts: string[] = [
    " Importante en el contexto de la ciudad.",
    "Está involucrado en: Cosas x ",
    "realiza actividades ilegales como: Venta de recetas falsas, Contrabando de órganos."
  ];

  constructor(
    public name: string = 'Doc. Mel',
    public description: string = '',
    public illegalActivities: string[] = ['Venta de recetas falsas', 'Contrabando de órganos']
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

  