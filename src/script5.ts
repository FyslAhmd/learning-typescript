class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const player1 = new Player("Messi", 35, "Argentina");
player1.play();

const player2 = new Player("Ronaldo", 37, "Portugal");
console.log(player2.name); // Error: Property 'name' is private and only accessible within class 'Player'.
player2.country = "Spain"; // Error: Cannot assign to 'country' because it is a read-only property.
player2.play();

const players: Player[] = [];
players.push(player1);
players.push(player2);
console.log(players);
