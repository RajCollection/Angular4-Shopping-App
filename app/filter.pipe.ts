import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(shoppingItemList: any, term: any): any {
    if(term === undefined) return shoppingItemList;

    return shoppingItemList.filter(function(item){
      return item.itemName.toLowerCase().includes(term.toLowerCase());
    })
  }

}
