import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64Encode',
  standalone: true
})
export class Base64EncodePipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return '';
    return btoa(JSON.stringify(value));
  }

}
