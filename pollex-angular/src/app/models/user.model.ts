export class User {
  private _id;
  private _username;
  private _token;

  constructor(data: any = {}) {
    this._id = data.id || -1;
    this._username = data.username;
    this._token = data.token;
  }

  get id() { return this._id; }
  set id(id: number) { this._id = id; }

  get username() { return this._username; }
  set username(username: string) { this._username = username; }

  get token() { return this._token; }
  set token(token: string) { this._token = token; }
}
