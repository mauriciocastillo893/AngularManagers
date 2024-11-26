import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'Adarqui Francisco', email: 'adarqui@capitalblue.cl', company: 'Capital Blue SPA', lada: '56', telephone: '9665491820', country: 'México', createdAt: '29/03/2022' },
    { id: 2, name: 'Francisco', email: 'adarqui@capitalblue.cl', company: 'Andres Pem', lada: '56', telephone: '9665491820', country: 'México', createdAt: '29/03/2022' },
    { id: 3, name: 'Josue', email: 'josue@sociallit.cl', company: 'Capital Blue SPA', lada: '56', telephone: '9665491820', country: 'México', createdAt: '29/03/2022' },
    { id: 4, name: 'Alfonso', email: 'alfonso@capgems.cl', company: 'AC Management', lada: '56', telephone: '9665491820', country: 'México', createdAt: '29/03/2022' },
    { id: 5, name: 'Charly', email: 'adarqui@capitalblue.cl', company: 'RIFT TALENTOS', lada: '56', telephone: '9665491820', country: 'México', createdAt: '29/03/2022' },
  ]);

  private filteredUsersSubject = new BehaviorSubject<User[]>(this.usersSubject.value);

  users$ = this.usersSubject.asObservable();
  filteredUsers$ = this.filteredUsersSubject.asObservable();

  private getLastId(): number {
    const currentUsers = this.usersSubject.value;
    return currentUsers.length ? Math.max(...currentUsers.map(user => user.id!)) : 0;
  }

  getUsers(): User[] {
    return this.usersSubject.value;
  }

  setFilteredUsers(filteredUsers: User[]): void {
    this.filteredUsersSubject.next(filteredUsers);
  }

  getFilteredUsers(): User[] {
    return this.filteredUsersSubject.value;
  }

  addUser(user: Omit<User, 'id'>): void {
    const newId = this.getLastId() + 1;
    const newUser: User = { ...user, id: newId };
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, newUser]);
    this.setFilteredUsers([...currentUsers, newUser]);
  }

  deleteUser(id: number): void {
    const currentUsers = this.getUsers();
    const updatedUsers = currentUsers.filter(user => user.id !== id);
    this.usersSubject.next(updatedUsers);
    this.setFilteredUsers(updatedUsers);
  }

  updateUser(updatedUser: User): void {
    console.log('Updated user:', updatedUser, updatedUser.id);
    const currentUsers = this.getUsers();
    const updatedUsers = currentUsers.map(user => (user.id === updatedUser.id ? updatedUser : user));
    this.usersSubject.next(updatedUsers);
    this.setFilteredUsers(updatedUsers);
  }
}


export interface User {
  id?: number;
  name: string;
  email: string | null;
  company: string | null;
  telephone: string;
  lada: string;
  country: string;
  createdAt: string;
}