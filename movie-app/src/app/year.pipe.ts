import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let dateArray = value.split('-');
    return dateArray[0];
  }

}
