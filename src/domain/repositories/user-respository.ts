import { User } from '../entities/user';

export abstract class UserRepository {
  getByUsername: (username: string) => Promise<User>;
}
