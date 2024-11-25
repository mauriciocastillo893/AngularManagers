import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName',
  standalone: true
})
export class ShortenNamePipe implements PipeTransform {

  transform(fullName: string): string {
    if (!fullName) return '';

    const names = fullName.split(' ');
    if (names.length > 1) {
      return `${names[0]} ${names[1][0]}.`;
    }
    return names[0];
  }

}
