export interface User {
    name: Name
    email: string
    phone: string
}

export interface Name {
    first: string
    last?: string
}

export interface RandomUserResponse {
  results: User[];
  info: any;
}