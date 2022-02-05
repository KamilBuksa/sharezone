import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'bigint', nullable:true})
   userId:  number;

  @Column(/*{type:"real"}*/)
  readonly username: string;

  @Column()
  readonly password: string;

}