import { UserModel } from "./user.model";

export class CurrentUser {
    public token: string;
    public user: UserModel;
}