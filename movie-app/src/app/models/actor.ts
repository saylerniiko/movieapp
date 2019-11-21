export class Actor {
  id: number;
  name: string;
  image: string;
  inMovie: boolean;
  constructor(actor: any, inMovie: boolean) {
    this.id = actor.id;
    this.name = actor.name;
    this.inMovie = inMovie;
    this.image = actor.image;
  }
}
