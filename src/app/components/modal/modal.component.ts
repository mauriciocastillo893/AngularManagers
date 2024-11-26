import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = 'Default Title';
  @Input() description: string = 'Default Description';
  @Input() isVisible: boolean | null = false;
  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onAccept(): void {
    this.accept.emit();
    this.isVisible = false;
  }

  onCancel(): void {
    this.cancel.emit();
    this.isVisible = false;
  }

  ngOnChanges(): void {
    console.log(this.isVisible)
  }
}
