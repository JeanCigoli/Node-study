import { inflate } from 'zlib';

export interface EmailValidator {
  isValid(email: string): boolean;
}
