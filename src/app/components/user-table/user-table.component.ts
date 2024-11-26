import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent, ButtonType } from "../button/button.component";
import { User, UserService } from '../../services/user-service/user.service';
import { Base64EncodePipe } from '../../pipes/base64-encode/base64-encode.pipe';
import { ShortenNamePipe } from '../../pipes/shorten-name/shorten-name.pipe';
import { PhoneFormatPipe } from '../../pipes/phone-format/phone-format.pipe';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    Base64EncodePipe,
    ShortenNamePipe,
    PhoneFormatPipe,
    ModalComponent
],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users: User[] = [];
  ButtonType = ButtonType;
  tempUserId!: number;
  activateModal: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.filteredUsers$.subscribe(users => {
      this.users = users;
    });
  }

  preConfirmDeleteUser(id: number): void {
      this.tempUserId = id;
      this.activateModal = true;
  }

  deleteUser(): void {
    console.log("tempUserId", this.tempUserId)
    this.userService.deleteUser(this.tempUserId);
    this.activateModal = false;
  }

}
