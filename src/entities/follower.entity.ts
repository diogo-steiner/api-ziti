import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./index";

@Entity("followers_followings")
export class FollowerFollowing {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  following: User;

  @ManyToOne(() => User)
  follower: User;
}
