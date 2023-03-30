export interface IUserFollowerResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
  coverUrl: string | null;
  updatedAt: Date;
  createdAt: Date;
}

export interface IAddFollowerResponse {
  id: string;
  following: IUserFollowerResponse;
  follower: IUserFollowerResponse;
}

export interface IGetFollowersSuggestionsResponse {
  next: string | null;
  prev: string | null;
  count: number;
  content: IUserFollowerResponse[];
}
