import {
  AccountModel, AddAccount, AddAccountModel, Encrypt, AddAccountRepository,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly encrypter: Encrypt,
    private readonly addAccountRepository: AddAccountRepository,
  ) {}

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);
    const account = await this.addAccountRepository.add(
      { ...accountData, password: hashedPassword },
    );
    return new Promise((resolve) => resolve(account));
  }
}
