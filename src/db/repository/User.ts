type UserSchema = {
  id: number;
  email: string;
  name?: string;
};

export default class User {
  _users: UserSchema[] = [];

  public getAll(): UserSchema[] {
    return this._users;
  }

  public add(user: UserSchema): void {
    this._users.push(user);
  }

  public findById(id: number): UserSchema | undefined {
    return this._users.find((user) => user.id === id);
  }

  public findByEmail(email: string): UserSchema | undefined {
    return this._users.find((user) => user.email === email);
  }
}
