import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../services/user-service/user.service';

@Component({
  selector: 'app-manager-management-page',
  standalone: true,
  imports: [],
  templateUrl: './manager-management-page.component.html',
  styleUrl: './manager-management-page.component.css'
})
export class ManagerManagementPageComponent {
  user: User | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['user']) {
        this.user = JSON.parse(JSON.parse(atob(params['user'])));
        console.log('User:', this.user, typeof this.user);
      }
    });
  }

}
