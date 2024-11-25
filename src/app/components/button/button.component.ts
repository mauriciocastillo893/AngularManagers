import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() dataButton: Button = { "description": "+" };
  @Input() navigateTo: string = ''

  constructor(private router: Router) { }

  navigate() {
    if (this.navigateTo) this.router.navigate([this.navigateTo])
  }
}

export interface Button {
  description?: string;
  buttonType?: ButtonType;
}

export enum ButtonType {
  EDIT = 'edit',
  DELETE = 'delete',
}