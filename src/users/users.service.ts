import { Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateUserDto, OmitUserId } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { use } from "passport";


@Injectable()
export class UsersService {
  private readonly users: CreateUserDto[];

  constructor(@InjectRepository(User)
              private readonly userRepository: Repository<User>
  ) {
    this.users = [];
  }


  async findOne(id: string): Promise<any | undefined> {

    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    return user;
  }

  // async findOne(username: string): Promise<CreateUserDto | undefined> {
  //   return this.users.find(user => user.username === username);
  // }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const userId = Date.now();

    const userObj = {
      userId: userId,
      username: createUserDto.username,
      password: hashedPassword
    };
const username = userObj.username;
const password = userObj.password;

    const user = await this.userRepository.create({
      userId:userId,
      username:username,
      password:password,
    })

    return this.userRepository.save(user);

  }
}


// async create(userData: any): Promise<any> {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(userData.password, salt);
//   const userId = Date.now();
//
//   this.users.push({
//     userId: userId,
//     username: userData.username,
//     password: hashedPassword
//   })
//
//   return true



// async createItem(createItemDto: CreateItemDto, user: User): Promise<Item> {
//   const newItem = await this.itemsRepository.save({
//     name: createItemDto.name,
//     description: createItemDto.description,
//     price: createItemDto.price,
//     delivery: createItemDto.delivery,
//     rating: createItemDto.rating,
//     imageUrl: createItemDto.imageUrl,
//   });
//
//   user.items = [...user.items, newItem];
//   await user.save();
//
//   return newItem;
// }