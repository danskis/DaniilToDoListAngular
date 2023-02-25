import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(){}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);

    switch (form.value.category) {
      case 1:
        console.log('1');
        break;
      case 2:
        console.log('2');
        break;
      case 3:
        console.log('3');
        break;
      case 4:
        console.log('4');
        break;
        
    }

    form.resetForm();
  }
  
}
