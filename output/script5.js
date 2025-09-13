class Player {
    constructor(n, a, c) {
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
const players = [];
players.push(player1);
players.push(player2);
console.log(players);
export {};
