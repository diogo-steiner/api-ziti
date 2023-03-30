import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post, User } from "./index";

@Entity("likes_posts")
export class LikePost {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Post, (post) => post.likes, { onDelete: "CASCADE" })
  post: Post;

  @ManyToOne(() => User)
  owner: User;
}
