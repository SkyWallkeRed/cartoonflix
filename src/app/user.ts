// tslint:disable-next-line:quotemark
import Film from "./film";

export default class User {
    public userName?: string;
    public userPassword?: any;
    public userFunds?: number;
    public userEmail?: any;
    public userFilms?: Array<Film>;

    constructor(name: string, password: any, mail: any, funds: number) {
        this.userName = name;
        this.userEmail = mail;
        this.userPassword = password;
        this.userFunds = funds;

    }
}
