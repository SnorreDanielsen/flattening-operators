import { concat, from, merge, of, timer } from "rxjs";
import { concatMap, delay, delayWhen, exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";

export function example3() {

  const A$ = of('A1', 'A2').pipe(delayWhen((v, i) => timer(1500 * i))); // 1.5 sekund mellom
  const B$ = of('B1', 'B2', 'B3', 'B4').pipe(delayWhen((v, i) => timer(1000 * i))); // 1 sekund mellom
  const C$ = of('C1', 'C2', 'C3', 'C4').pipe(delayWhen((v, i) => timer(1000 * i))); // 1 sekund mellom

  A$.pipe(
    exhaustMap(a => {
      console.log(a);
      if (a === 'A1') {
        return B$;
      } else if (a === 'A2') {
        return C$;
      }
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
