export class Friend {
    name: string;
    phone: string;
    email: string;
    details: boolean;

    constructor(name: string, phone: string, email: string){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.details = false;
    }
}
