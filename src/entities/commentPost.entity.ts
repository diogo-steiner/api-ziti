import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post, User } from "./index";

@Entity("comments_posts")
export class CommentPost {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  text: string;

  @UpdateDateColumn()
  updatedAt: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Post, { onDelete: "CASCADE" })
  post: Post;

  @ManyToOne(() => User)
  owner: User;
}
