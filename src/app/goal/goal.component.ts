import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal (1, 'Watch funding demo','Find an online version and watch merlin find his son', new Date(2020,3,24) ),
    new Goal (2, 'Buy cookies','i have to buy cookies for the parrot', new Date(2019,6,9)),
    new Goal (3, 'Get new phone case', 'Diana has her birthday coming up soon', new Date(2022,1,12)),
    new Goal (4, 'Get Dog food', 'Pupper likes expwnsive snacks', new Date(2019,0,8)),
    new Goal (5, 'Solve math homework','Damn math', new Date(2019,2,14)),
    new Goal (6, 'Plot my world dominationm plan', 'Cause i am an evil overlord', new Date(2030,3,14))
  ];

  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index:number){
    this.goals[index].showDescription= !this.goals[index].showDescription;
  }

  completeGoal(isComplete: any, index: number){
    if(isComplete){
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
