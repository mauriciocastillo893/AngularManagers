import { Component } from '@angular/core';
import { UserTableComponent } from "../../components/user-table/user-table.component";

@Component({
  selector: 'app-managers-list-page',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './managers-list-page.component.html',
  styleUrl: './managers-list-page.component.css'
})
export class ManagersListPageComponent {

}
