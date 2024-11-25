import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'Adarqui', email: 'adarqui@capitalblue.cl', company: 'Capital Blue SPA', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 2, name: 'Francisco', email: 'adarqui@capitalblue.cl', company: 'Andres Pem', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 3, name: 'Josue', email: 'josue@sociallit.cl', company: 'Capital Blue SPA', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 4, name: 'Alfonso', email: null, company: 'AC Management', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 5, name: 'Charly', email: 'adarqui@capitalblue.cl', company: 'RIFT TALENTOS', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
  ]);

  users$ = this.usersSubject.asObservable();


  private getLastId(): number {
    const currentUsers = this.usersSubject.value;
    return currentUsers.length ? Math.max(...currentUsers.map(user => user.id)) : 0;
  }

  getUsers(): User[] {
    return this.usersSubject.value;
  }

  addUser(user: Omit<User, 'id'>): void {
    const newId = this.getLastId() + 1;
    const newUser: User = { ...user, id: newId };
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, newUser]);
  }

  deleteUser(id: number): void {
    const currentUsers = this.getUsers();
    this.usersSubject.next(currentUsers.filter(user => user.id !== id));
  }

  updateUser(updatedUser: User): void {
    const currentUsers = this.getUsers();
    const updatedUsers = currentUsers.map(user => (user.id === updatedUser.id ? updatedUser : user));
    this.usersSubject.next(updatedUsers);
  }
}

export interface User {
  id: number;
  name: string;
  email: string | null;
  company: string;
  whatsapp: string;
  createdAt: string;
}