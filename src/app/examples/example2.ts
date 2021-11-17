import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

export function example2() {
  
  of('A').pipe(
    map(() => {
      const x = 'B';
      console.log(x);
      return x;
    })
  ).subscribe(y => {
    console.log(y);
  });


}

// Starter som
// of('A').pipe(
//   map(() => {
//     const x = 'B';
//     console.log(x);
//     return x;
//   })
// ).subscribe(y => {
//   console.log(y);
// });
