export class User {
  constructor(
      public userID: number, 
      public roleID: number, 
      public groupID: number, 
      public firstName: string, 
      public lastName: string, 
      public username: string, 
      public password:string, 
      public email: string, 
      public birthday: Date,
      public token: string, 
      public userPicture?: string ) {
  }

}
