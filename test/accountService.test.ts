import { AccountDAODatabase } from "../src/AccountDAO";
import { AccountService } from "../src/services/AccountService";

let accountService: AccountService;

beforeEach(() => {
    const accountDAO = new AccountDAODatabase();
    accountService = new AccountService(accountDAO);
});

it("Should create a passenger account", async () => {
    const inputSignup = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "97456321558",
        isPassenger: true
    };
    const outputSignup = await accountService.signup(inputSignup);
    expect(outputSignup.accountId).toBeDefined();
    const outputGetAccount = await accountService.getAccount(outputSignup.accountId);
    expect(outputGetAccount.name).toBe(inputSignup.name);
    expect(outputGetAccount.email).toBe(inputSignup.email);
    expect(outputGetAccount.cpf).toBe(inputSignup.cpf);
})