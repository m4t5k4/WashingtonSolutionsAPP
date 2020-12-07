export class User {
  constructor(public userID: number, public roleID: number, public groupID: number, public firstname: string, public lastname: string, public username: string, public password:string, public email: string, public birthday: Date, public userPicture?: string ) {
  }

}
