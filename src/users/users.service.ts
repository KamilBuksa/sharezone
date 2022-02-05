import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateUserDto, OmitUserId } from "./dto/create-user.dto";
// This should be a real class/interface representing a user entity
// export type User = {
//   userId: number;
//   username: string;
//   password: string;
//
//
// }

@Injectable()
export class UsersService {
  private readonly users: CreateUserDto[];

  constructor() {
    this.users = [];
  }


  async findOne(username: string): Promise<CreateUserDto | undefined> {
    console.log('FIND ONE', await this.users.find(user => user.username === username));
    return this.users.find(user => user.username === username);
  }

  async create(userData: OmitUserId): Promise<boolean> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const userId = Date.now();
    this.users.push({
      userId: userId,
      username: userData.username,
      password: hashedPassword
    })

    console.log('userData', userData);


    return true

  }
}


