import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ToDo } from '../../entities/todo.entity';
import { ToDoService } from '../../services/todo.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [ToDoService]
})
export class ToDoListComponent implements OnInit {

  toDos: ToDo[] = [];

  constructor(
    private _toDoService: ToDoService, 
    //private _router: Router, 
    private _alertService: AlertService) {

    /*this._alertService.onToDoUpdated$.subscribe(
      toDo => {
        this.getToDos();
      });

    this._alertService.onToDoDeleted$.subscribe(
      toDo => {
        this.getToDos();
        this._router.navigate(['']);
      });

    this._alertService.onToDoNew$.subscribe(
      toDo => {
        this.getToDos();
        this._router.navigate(['/todo', toDo.id]);
      });*/
  }


  ngOnInit() {
    this.getToDos();
  }

  openTodo(toDo: ToDo) {
    //this._router.navigate(['/todo', toDo.id]);
  }

  private getToDos() {
    //this._toDoService.getAll(0, 200, "").then(toDos => this.toDos = toDos);
  }
}
