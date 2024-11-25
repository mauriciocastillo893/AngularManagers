import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, ButtonType } from "../button/button.component";
import { User, UserService } from '../../services/user-service/user.service';
import { Base64EncodePipe } from '../../pipes/base64-encode/base64-encode.pipe';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    Base64EncodePipe,
],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users: User[] = [];
  ButtonType = ButtonType;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users$.subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

}
