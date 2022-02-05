import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, OmitPassword, OmitUserId } from "../users/dto/create-user.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any | null> {
        const user = await this.usersService.findOne(username);

        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async register(userData:any):Promise<boolean>{
       return await this.usersService.create(userData)
    }
// ??
    async login(user: any):Promise<any> {
        console.log(user.userId);
        const payload = { username: user.username, sub: user.userId };
        console.log(payload);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}