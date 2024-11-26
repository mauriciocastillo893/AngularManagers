import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user-service/user.service';

@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.css'
})
export class InputCardComponent {

  constructor() { }

  defaultInfoCard: InfoCard[] = [
    { title: 'Company', inputType: InputType.TEXT },
    { title: 'Name', inputType: InputType.TEXT },
    { title: 'Country', inputType: InputType.TEXT },
    { title: 'Telephone', inputType: InputType.PHONE },
    { title: 'Email', inputType: InputType.EMAIL },
  ];
  @Input() currentInfoCard: InfoCard[] = this.defaultInfoCard;
  @Input() saveChanges!: boolean | null;
  @Output() resultOfInfoCard = new EventEmitter<User>();
  InputType = InputType;

  inputPatterns: { [key in InputType]: string } = {
    [InputType.TEXT]: '^\\S.*$',
    [InputType.NUMBER]: '^[0-9]+$',
    [InputType.EMAIL]: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    [InputType.PASSWORD]: '^.{6,}$',
    [InputType.PHONE]: '^\\d{10}$',
  };

  errorMessages: { [key in InputType]: string } = {
    [InputType.TEXT]: 'This field cannot be empty.',
    [InputType.NUMBER]: 'This field accepts numbers only.',
    [InputType.EMAIL]: 'Please enter a valid email address.',
    [InputType.PASSWORD]: 'Password must be at least 6 characters long.',
    [InputType.PHONE]: 'Phone must have 1-3 digits lada and 10 digits number.',
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['saveChanges'] && this.saveChanges != null) {
      this.validateAllFields();
      console.log(this.saveChanges)
    }
  }

  getPattern(inputType: InputType): string {
    return this.inputPatterns[inputType] || '.*';
  }

  validateAllFields(): void {
    let hasErrors = false;

    this.currentInfoCard.forEach((card) => {
      if (card?.required == false) {
        card.messageError = '';
        return;
      }
      if (card.inputType === InputType.PHONE) {
        const lada = card.lada || '';
        const phoneNumber = card.currentValue || '';
        
        const isLadaValid = /^\d{1,3}$/.test(lada);
        const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

        const isValid = isLadaValid && isPhoneNumberValid;
        console.log("isLadaValid", isLadaValid, "isPhoneNumberValid", isPhoneNumberValid, "isValid", isValid, lada, phoneNumber)
        card.messageError = isValid ? '' : this.errorMessages[card.inputType];
        if (!isValid) hasErrors = true;
      } else {
        const pattern = this.getPattern(card.inputType);
        const regex = new RegExp(pattern);
        const isValid = card.currentValue && regex.test(card.currentValue);
        card.messageError = isValid ? '' : this.errorMessages[card.inputType];
        if (!isValid) hasErrors = true;
      }
    });

    if (!hasErrors) this.resultOfInfoCard.emit(
      {
        company: this.currentInfoCard[0].currentValue || '',
        name: this.currentInfoCard[1].currentValue || '',
        country: this.currentInfoCard[2].currentValue || '',
        whatsapp: this.currentInfoCard[3].currentValue || '',
        lada: this.currentInfoCard[3].lada || '',
        email: this.currentInfoCard[4].currentValue || '',
        createdAt: new Date().toLocaleDateString(),
      }
    );
  }

  clearError(card: InfoCard): void {
    if (card.inputType === InputType.PHONE) {
      const ladaValid = card.lada && /^\d{1,3}$/.test(card.lada);
      const phoneValid = card.currentValue && /^\d{10}$/.test(card.currentValue);
      if (ladaValid && phoneValid) card.messageError = '';
    } else {
      const pattern = this.getPattern(card.inputType);
      const regex = new RegExp(pattern);
      if (card.currentValue && regex.test(card.currentValue)) card.messageError = '';
    }
  }

  preventInvalidInput(event: KeyboardEvent): void {
    const invalidChars = ['e', 'E', '+', '-', '.'];
    if (invalidChars.includes(event.key)) event.preventDefault();
  }

}

export interface InfoCard {
  title: string;
  inputType: InputType;
  currentValue?: string;
  lada?: string;
  placeholder?: string;
  messageError?: string;
  required?: boolean;
}

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'tel',
}