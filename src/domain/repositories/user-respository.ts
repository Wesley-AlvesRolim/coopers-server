import { User } from 'src/domain/entities';

export abstract class UserRepository {
  create: (username: string, password: string) => Promise<void>;
  getByUsername: (username: string) => Promise<User>;
}
