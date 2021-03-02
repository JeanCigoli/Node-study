import { Encrypt } from '../../protocols/encrypter';
import { DbAddAccount } from './db-add-account';

interface SutTypes {
  sut: DbAddAccount;
  encryptStub: Encrypt
}

const makeEncrypter = (): Encrypt => {
  class EncryptStub implements Encrypt {
    encrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('hashed_value'));
    }
  }
  return new EncryptStub();
};

const makeSut = (): SutTypes => {
  const encryptStub = makeEncrypter();
  const sut = new DbAddAccount(encryptStub);

  return { sut, encryptStub };
};

describe('DbAddAccount UseCase', () => {
  test('Should call Encrypt with correct password', async () => {
    const { sut, encryptStub } = makeSut();
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
