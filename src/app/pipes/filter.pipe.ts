import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], key: any,value: any): any[] {
    if (items) {
      return items.filter(item=>item[key]==value?item:null);
        
    }

  }

}
