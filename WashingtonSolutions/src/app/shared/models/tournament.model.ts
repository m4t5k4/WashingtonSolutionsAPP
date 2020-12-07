export class Tournament {
  constructor(public tournamentID: number, public name: string, public startdate: Date, public enddate: Date, public competitionID : number, public winnerID?: number) {

  }
}
