export class UserModel {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public password: string,
        public profile: string
    ){}
}