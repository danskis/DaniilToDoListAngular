import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskContent, TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  @Input() task: TaskContent = {name: '', estimation: 0};

  ngOnInit(): void {
  }

  deleteTask(){
    this.taskService.eliminateTask(this.task); 
  }

}
