import AccountDAO from "../AccountDAO";
import IAccountService from "./interfaces/IAccountService";

export class AccountService implements IAccountService {

    accountDAO: AccountDAO;

    constructor (accountDAO: AccountDAO) {
        this.accountDAO = accountDAO;
    }

    async signup(input: any): Promise<any> {
        
    }

    async getAccount(accountId: any): Promise<any> {
        
    }

}