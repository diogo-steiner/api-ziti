export interface ICreatePostRequest {
  text: string;
}

export interface IOwnerPostResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
  coverUrl: string | null;
}

export interface IPostBaseResponse {
  id: string;
  text: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface ICreatePostResponse {
  id: string;
  text: string;
  updatedAt: Date;
  createdAt: Date;
  owner: IOwnerPostResponse;
  likes: ILikePostResponse[];
  comments: ICommnetPostResponse[];
  favorites: IAddFavoritePostResponse[];
}

export interface ILikePostResponse {
  id: string;
  owner: IOwnerPostResponse;
}

export interface IAddLikePostResponse {
  id: string;
  post: IPostBaseResponse;
  owner: IOwnerPostResponse;
}

export interface IAddCommentPostRequest {
  text: string;
}

export interface IAddCommentPostResponse extends IAddCommentPostRequest {
  id: string;
  updatedAt: Date;
  createdAt: Date;
  post: IPostBaseResponse;
  owner: IOwnerPostResponse;
}

export interface ICommnetPostResponse extends IAddCommentPostRequest {
  id: string;
  updatedAt: Date;
  createdAt: Date;
  owner: IOwnerPostResponse;
}

export interface IAddFavoritePostResponse {
  id: string;
  post: IPostBaseResponse;
  owner: IOwnerPostResponse;
}

export interface IFavoritePostResponse {
  id: string;
  owner: IOwnerPostResponse;
}

export interface IGetFavoritePostResponse extends IPostFullResponse {}

export interface IPostFullResponse extends IPostBaseResponse {
  comments: ICommnetPostResponse[];
  likes: ILikePostResponse[];
  favorites: IFavoritePostResponse[];
}

export interface IGetPostResponse extends IPostFullResponse {
  owner: IOwnerPostResponse;
}
