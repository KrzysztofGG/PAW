export class User {
    _id: String;
    name: String;
    email: String;
    password: String;
    isBanned: boolean;
    roles: String[];

    constructor(_id: String, name: String, email: String,
        password: String, isBanned: boolean, roles: String[]){
        this._id =_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isBanned = isBanned;
        this.roles = roles;
    }
}
