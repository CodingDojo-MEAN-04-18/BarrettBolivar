export class User {
    public id: number = null;
    public first_name: string = "";
    public last_name: string = "";
    public email: string = "";
    public password: string = "";
    public cpassword: string = "";
    public saddress: string = "";
    public unit: string = "";
    public city: string = "";
    public state: string = "";
    public lucky;
    public created_at: Date = new Date();
    public updated_at: Date = new Date()
}
