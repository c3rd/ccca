export default interface IAccountService {
    signup(input: any): Promise<any>;
    getAccount(accountId: any): Promise<any>;
}