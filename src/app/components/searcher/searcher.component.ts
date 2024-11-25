import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../../services/user-service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css'
})
export class SearcherComponent {

  constructor(
    private userService: UserService,
  ) { }

  @Input() propertiesToFilter: string[] = [
    'name', 'email'
  ];
  @Output() newArray = new EventEmitter<User[]>();
  searchValue: string = '';

  ngOnInit() {
    this.filterArrayByProperties();
  }

  filterArrayByProperties(): void {
    const searchValue = this.searchValue?.toLowerCase();

    if (!searchValue) {
      const allUsers = this.userService.getUsers();
      this.newArray.emit(allUsers);
      this.userService.setFilteredUsers(allUsers);
      return;
    }

    const result = this.userService.getUsers().filter((item) =>
      this.propertiesToFilter.some((property) => {
        const propValue = item[property as keyof User];
        return (
          typeof propValue === "string" &&
          propValue.toLowerCase().includes(searchValue)
        );
      })
    );
    // console.log("result", result);
    this.newArray.emit(result);
    this.userService.setFilteredUsers(result);
  }

  eraseInfo(): void {
    this.searchValue = '';
    this.filterArrayByProperties();
  }
}
