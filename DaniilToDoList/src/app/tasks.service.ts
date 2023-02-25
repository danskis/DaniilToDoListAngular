import { Injectable } from "@angular/core";

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

}