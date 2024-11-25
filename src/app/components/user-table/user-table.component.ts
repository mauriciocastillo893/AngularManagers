import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, ButtonType } from "../button/button.component";

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
[x: string]: any;
  users = [
    { id: 1, name: 'Adarqui', email: 'adarqui@capitalblue.cl', company: 'Capital Blue SPA', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 2, name: 'Francisco', email: 'adarqui@capitalblue.cl', company: 'Andres Pem', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 3, name: 'Josue', email: 'josue@sociallit.cl', company: 'Capital Blue SPA', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 4, name: 'Alfonso', email: null, company: 'AC Management', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' },
    { id: 5, name: 'Charly', email: 'adarqui@capitalblue.cl', company: 'RIFT TALENTOS', whatsapp: '+56 9 6654 9182', createdAt: '29-03-2022' }
  ];

  ButtonType = ButtonType;
}
