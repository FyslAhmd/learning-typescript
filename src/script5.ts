class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const player1 = new Player("Messi", 35, "Argentina");
player1.play();

const player2 = new Player("Ronaldo", 37, "Portugal");
player2.play();

const players: Player[] = [];
players.push(player1);
players.push(player2);
console.log(players);