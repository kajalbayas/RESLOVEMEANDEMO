import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform
 {
   

  transform(records: Array<any>, args?: any): any 
  {
    debugger;
    if(records && records.length >0 )
    {
      debugger;
       return records.sort(function(a, b)
       {
         debugger;
          if(a[args.property] < b[args.property])
          {
            return -1 * args.direction;
          }
          else if( a[args.property] > b[args.property]){
            return 1 * args.direction;
          }
          else{
            return 0;
          }
        });
      }
    };
}