import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movieList:any[], term:string):any[] {
    return movieList.filter((data)=>data.title.toLowerCase().includes(term.toLocaleLowerCase()));
  }

}
