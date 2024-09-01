export interface CreateUserRequest {
  body: {
    name: string;
    email: string;
    password: string;
  };
}
