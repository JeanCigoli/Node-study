import { DbAddAccount } from './db-add-account';

describe('DbAddAccount UseCase', () => {
  test('Should call Encrypt with correct password', async () => {
    class EncryptStub {
      encrypt(value: string): Promise<string> {
        return new Promise((resolve) => resolve('hashed_value'));
      }
    }
    const encryptStub = new EncryptStub();
    const sut = new DbAddAccount(encryptStub);
    const encryptSpy = jest.spyOn(encryptStub, 'encrypt');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    };
    await sut.add(accountData);

    expect(encryptSpy).toHaveBeenCalledWith(accountData.password);
  });
});
