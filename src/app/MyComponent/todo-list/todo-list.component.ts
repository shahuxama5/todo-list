import { Todo } from './../../Todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick (todo: Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggered");
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }

}
