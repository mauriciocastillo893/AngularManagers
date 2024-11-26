import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../../services/user-service/user.service';
import { InfoCard, InputCardComponent, InputType } from "../../components/input-card/input-card.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-manager-management-page',
  standalone: true,
  imports: [InputCardComponent, ButtonComponent],
  templateUrl: './manager-management-page.component.html',
  styleUrl: './manager-management-page.component.css'
})
export class ManagerManagementPageComponent {
  user: User | null = null;
  isChangesApplied: boolean | null = null;
  currentInfoCard: InfoCard[] = [
    { title: 'Company', inputType: InputType.TEXT, placeholder: "My Company" },
    { title: 'Name', inputType: InputType.TEXT, placeholder: "-" },
    { title: 'Country', inputType: InputType.TEXT, placeholder: "México", required: false },
    { title: 'Telephone', inputType: InputType.PHONE, placeholder: "123456789" },
    { title: 'Email', inputType: InputType.EMAIL, placeholder: "example@example.com" },
  ];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private mainRouter: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['user']) {
        this.user = JSON.parse(JSON.parse(atob(params['user'])));
        console.log('User:', this.user, typeof this.user);
      }
    });
  }

  saveManagerInfo(): void {
    this.isChangesApplied = !this.isChangesApplied;
  }

  saveChanges(user: User): void {
    this.userService.addUser(user);
    this.mainRouter.navigate(["/"])
  }
}
