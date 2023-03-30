export interface ICreateSessionRequest {
  username: string;
  password: string;
}

export interface IOwnerSessionResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatarUrl: string | null;
  coverUrl: string | null;
  updatedAt: Date;
  createdAt: Date;
}

export interface ICreateSessionResponse {
  token: string;
  user: IOwnerSessionResponse;
}
