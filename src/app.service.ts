import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import users from '../db/users.json';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  _id: number = users.length;

  getUser(): string {
    return JSON.stringify(users);
  }

  getUserById(id: number): string {
    userExists(id);
    return JSON.stringify(users[id]);
  }

  createUser(data: UserDto): string {
    const user = {
      id: this._id,
      email: data.email,
      password: data.password,
    };
    users.push(user);
    this._id++;
    return JSON.stringify({ message: 'User created successfully!', user });
  }

  updateUser(id: number, data: UserDto): string {
    userExists(id);
    users[id].email = data.email;
    users[id].password = data.password;
    return JSON.stringify({
      message: 'User updated successfully',
      user: users[id],
    });
  }

  deleteUser(id: number): string {
    userExists(id);

    users.splice(id, 1);
    return JSON.stringify({
      message: 'User deleted successfully',
      user: users[id],
    });
  }
}

function userExists(id: number) {
  if (users[id] == undefined) {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'User not found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
