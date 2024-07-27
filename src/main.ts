import { AccountDAODatabase } from "./AccountDAO";
import API from "./API";
import { AccountService } from "./services/AccountService";

const accountDAO = new AccountDAODatabase();
const accountService = new AccountService(accountDAO);
const api = new API(accountService);
api.build();
api.start();