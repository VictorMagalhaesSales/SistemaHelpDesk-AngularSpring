import { UserModel } from "./user.model";

export class TicketModel {
    constructor(
        public id: string,
        public number: number,
        public title: string,
        public status: string,
        public priority: string,
        public imagem: string,
        public user: UserModel,
        public assignedUser: UserModel,
        public data: string,
        public changes: Array<string>
    ){}
}