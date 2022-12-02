import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = { 
    username: 'John',
    email: 'test56@gmail.bg',
    tel: '00359 89898989'
  } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
