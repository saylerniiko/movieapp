export class Actor {
  name: string;
  image: string;
  inMovie: boolean;
  constructor(actor: any, inMovie: boolean) {
    this.name = actor.name;
    this.inMovie = inMovie;
    this.image = actor.image;
  }
}
