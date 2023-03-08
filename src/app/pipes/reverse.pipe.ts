import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserve'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
