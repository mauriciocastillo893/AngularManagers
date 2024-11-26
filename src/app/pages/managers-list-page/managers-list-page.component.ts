import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { SearcherComponent } from "../../components/searcher/searcher.component";
import { UserTableComponent } from "../../components/user-table/user-table.component";

@Component({
  selector: 'app-managers-list-page',
  standalone: true,
  imports: [ButtonComponent, SearcherComponent, UserTableComponent],
  templateUrl: './managers-list-page.component.html',
  styleUrl: './managers-list-page.component.css'
})
export class ManagersListPageComponent {

}
