import { hashSync } from "bcrypt";
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { FavoritePost, FollowerFollowing, Post } from "./index";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 32 })
  firstName: string;

  @Column({ length: 32 })
  lastName: string;

  @Column({ length: 16, unique: true })
  username: string;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "text", nullable: true, default: null })
  avatarUrl: string;

  @Column({ type: "text", nullable: true, default: null })
  coverUrl: string;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @BeforeInsert()
  hasPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Post, (post) => post.owner)
  posts: Post[];

  @OneToMany(
    () => FollowerFollowing,
    (followerFollowing) => followerFollowing.follower
  )
  followersFollowings: FollowerFollowing[];

  @OneToMany(() => FavoritePost, (favoritePost) => favoritePost)
  favoritesPosts: FavoritePost[];
}
