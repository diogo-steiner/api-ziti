import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User, LikePost, CommentPost, FavoritePost } from "./";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  text: string;

  @UpdateDateColumn()
  updatedAt: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => User, (user) => user.posts)
  owner: User;

  @OneToMany(() => LikePost, (likePost) => likePost.post)
  likes: LikePost[];

  @OneToMany(() => CommentPost, (commentPost) => commentPost.post)
  comments: CommentPost[];

  @OneToMany(() => FavoritePost, (favoritePost) => favoritePost.post)
  favorites: FavoritePost[];
}
