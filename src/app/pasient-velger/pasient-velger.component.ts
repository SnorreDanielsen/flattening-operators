import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pasient-velger',
  templateUrl: './pasient-velger.component.html',
  styleUrls: ['./pasient-velger.component.scss']
})
export class PasientVelgerComponent implements OnInit {
  pasientValgt$ = new Subject();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.pasientValgt$
      .pipe(
        switchMap(pasient => {
          return this.http.get(`http://furst-api.no/rekvisisjon-for-pasient/${pasient}`)
        })
      )
      .subscribe(r => console.log(r));
  }

}
