export class NewUser {
    constructor(
        public roleID: number,
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public email: string,
        public dob: string) {
    }

}
