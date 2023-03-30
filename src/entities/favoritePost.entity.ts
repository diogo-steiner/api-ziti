import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity("favorites_posts")
export class FavoritePost {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Post, (post) => post.favorites)
  post: Post;

  @ManyToOne(() => User, (user) => user.favoritesPosts)
  owner: User;
}
