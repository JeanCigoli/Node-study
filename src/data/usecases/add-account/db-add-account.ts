import {
  AccountModel, AddAccount, AddAccountModel, Encrypt,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  constructor(private readonly encrypter: Encrypt) {}

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password);
    return new Promise((resolve) => resolve(null));
  }
}
