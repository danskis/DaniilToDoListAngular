import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TaskContent, TasksService } from '../tasks.service';

@Component({
  selector: 'app-my-to-do-list',
  templateUrl: './my-to-do-list.component.html',
  styleUrls: ['./my-to-do-list.component.css']
})
export class MyToDoListComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  todo = this.tasksService.todo;
  inprogress =  this.tasksService.inprogress;
  done = this.tasksService.done;
  beapproved = this.tasksService.beapproved;

  drop(event: CdkDragDrop<TaskContent[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
