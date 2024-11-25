import { Component } from '@angular/core';
import { UserTableComponent } from "../../components/user-table/user-table.component";
import { ButtonComponent } from "../../components/button/button.component";
import { SearcherComponent } from "../../components/searcher/searcher.component";

@Component({
  selector: 'app-managers-list-page',
  standalone: true,
  imports: [UserTableComponent, ButtonComponent, SearcherComponent],
  templateUrl: './managers-list-page.component.html',
  styleUrl: './managers-list-page.component.css'
})
export class ManagersListPageComponent {

}
