import { Component } from '@angular/core';
import { Itodo } from './shared/models/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iomt1';
  todoArray : Array<Itodo> = [
  //   {
  //   todoItem:"JS"
  // }
]

  getTodos(todo : Itodo){
    this.todoArray.unshift(todo)
  }
}
