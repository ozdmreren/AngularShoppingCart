import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  standalone: true,
})
export class TextPipe implements PipeTransform {
  transform(text: string): string {
    if (text.length < 20) {
      return text + '...';
    }
    return text.substring(0, 20);
  }
}
