import { Component } from '@angular/core';
import { UserTableComponent } from "../../components/user-table/user-table.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-managers-list-page',
  standalone: true,
  imports: [UserTableComponent, ButtonComponent],
  templateUrl: './managers-list-page.component.html',
  styleUrl: './managers-list-page.component.css'
})
export class ManagersListPageComponent {

}
