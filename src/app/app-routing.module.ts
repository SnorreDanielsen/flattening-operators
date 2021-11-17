import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFourComponent } from './example-four/example-four.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { PasientVelgerComponent } from './pasient-velger/pasient-velger.component';

const routes: Routes = [
  {
    path: 'pasienter',
    component: PasientVelgerComponent
  },
  {
    path: 'one',
    component: ExampleOneComponent
  },
  {
    path: 'two',
    component: ExampleTwoComponent
  },
  {
    path: 'three',
    component: ExampleThreeComponent
  },
  {
    path: 'four',
    component: ExampleFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
