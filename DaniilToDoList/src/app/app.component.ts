import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskContent, TasksService } from './tasks.service';

interface Task {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tasks : Task[] = [
    {value: 1, viewValue: 'To Do'},
    {value: 2, viewValue: 'In Progress'},
    {value: 3, viewValue: 'To Be Approved'},
    {value: 4, viewValue: 'Done'}
  ];

  constructor(private taskService: TasksService){}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    switch (form.value.category) {
      case 1:
        this.taskService.todo.push(form.value);
        break;
      case 2:
        this.taskService.inprogress.push(form.value);
        break;
      case 3:
        this.taskService.beapproved.push(form.value);
        break;
      case 4:
        this.taskService.done.push(form.value);
        break;
        
    }

    form.resetForm();

    this.taskService.taskEliminated.subscribe(task => {

      this.taskService.todo.find((taskArray: TaskContent, i: number) => {
        if(taskArray == task){
          this.taskService.todo.splice(i, 1);
        }
      })

      this.taskService.inprogress.find((taskArray: TaskContent, i: number) => {
        if(taskArray == task){
          this.taskService.inprogress.splice(i, 1);
        }
      })

      this.taskService.beapproved.find((taskArray: TaskContent, i: number) => {
        if(taskArray == task){
          this.taskService.beapproved.splice(i, 1);
        }
      })

      this.taskService.done.find((taskArray: TaskContent, i: number) => {
        if(taskArray == task){
          this.taskService.done.splice(i, 1);
        }
      })

    })
  }
  
}
