import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [x: string]: any;
  // goal = 'Watch Finding Nemo';
  // goals:string[];
  // age:number[];

  // goals:Goal[] = [
  //   {id:1, name: 'Watch Finding Nemo'},
  //   {id:2, name: 'Buy Cookies'},
  //   {id:3, name: 'Get new phone Case'},
  //   {id:4, name: 'Get Dog Food'},
  //   {id:5, name: 'Solve math homework'},
  //   {id:6, name: 'Plot my world domination plan'}
  // ];




  constructor(){
    // this.goals = ['Watch Finding Nemo', 'Buy cookies', 'Get new phone case']
    // this.age=[1,2,3];
  }
}
