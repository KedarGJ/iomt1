import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm !: NgForm;
  @Output() emitTodos : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }
  onTodoAdd(){
    if(this.todoForm.valid){
      let newTodo = this.todoForm.value;
      this.todoForm.reset();
      this.emitTodos.emit(newTodo)
    }
  }

}
