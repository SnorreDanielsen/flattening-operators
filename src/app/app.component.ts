import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { example1 } from './examples/example1';
import { example2 } from './examples/example2';
import { example3 } from './examples/example3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
    // example1();
    // example2();
    // example3();
    
    // const velgProve$ = of('A');
    // const hentGraf$ = of('B');
    
    // velgProve$.pipe(
    //   switchMap(prove => {
    //     const x = hentGraf$;
    //     console.log(1, x);
    //     return x;
    //   })
    // ).subscribe(y => {
    //   console.log(2, y);
    // });
  }

  // myPromises() {
  //   const velgProvePromise = Promise.resolve('A');
  //   const hentGrafPromise = Promise.resolve('B');

  //   velgProvePromise
  //     .then(prove => {
  //       const x = 'A';
  //       console.log(3, x);
  //       return x;
  //     })
  //     .then(y => {
  //       console.log(4, y);
  //     });
  // }



}
