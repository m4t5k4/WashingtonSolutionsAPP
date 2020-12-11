export class Game {
    constructor(
        public gameID: number,
        public scoreTeamA: number, 
        public scoreTeamB: number, 
        public teamAID: number,
        public teamBID: number,
        public tableID: number,
        public gameTypeID: number,
        public tournamentID: number) {

    }
}
