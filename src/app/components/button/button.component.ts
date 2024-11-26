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
  @Input() size: Size = {};
  @Input() navigateTo: string | null = null
  @Input() queryParams: any = {}

  constructor(private router: Router) { }

  navigate() {
    if(this.navigateTo != null) this.router.navigate([this.navigateTo], { queryParams: this.queryParams });
  }
}

export interface Button {
  description?: string;
  buttonType?: ButtonType;
}

export interface Size {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string
}

export enum ButtonType {
  EDIT = 'edit',
  DELETE = 'delete',
}