import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string) {

    // const resultArray = [];
    // for (const item of value) {
    //   if (item[propName].indexOf(filterString) !== -1) {
    //     resultArray.push(item);
    //   }
    // }

    // return resultArray;

    return value.filter((val) => val[propName].startsWith(filterString));
  }
}
