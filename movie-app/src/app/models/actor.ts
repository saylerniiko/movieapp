export class Actor {
  id: number;
  name: string;
  image: string;
  inMovie: boolean;
  role: string;
  constructor(actor: any, inMovie: boolean) {
    this.id = actor.id;
    this.name = actor.name;
    this.inMovie = inMovie;
    this.image = actor.image;
    if (this.inMovie) {
      this.role = actor.character;
    } else {
      this.role = 'none';
    }
  }
}
