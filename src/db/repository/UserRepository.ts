import { User } from "../model/User";


export default class UserRepository {
  _users: User[] = [];

  public getAll(): User[] {
    return this._users;
  }

  public add(user: User): void {
      this._users.push(User.parse(user));
  }

  public findById(id: number): User | undefined {
    return this._users.find((user) => user.id === id);
  }

  public findByEmail(email: string): User | undefined {
    return this._users.find((user) => user.email === email);
  }

  public delete(id: number): boolean
 {
    const index = this._users.findIndex((user) => user.id === id)
    if (index >= 0) {
      this._users.splice(index, 1)
      return true
    }
    return false
 }
}
