import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface TaskContent{
    name: string,
    estimation: number
}

@Injectable({providedIn: 'root'})
export class TasksService{

    todo : TaskContent[] = [];
    inprogress : TaskContent[] = [];
    done : TaskContent[] = [];
    beapproved : TaskContent[] = [];

    taskEliminated = new Subject<TaskContent>();

    eliminateTask(task: TaskContent){
        this.taskEliminated.next(task);
    }

}