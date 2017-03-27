import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[TodosService]
})
export class TodosComponent implements OnInit {
  todos;
  constructor(private Todos:TodosService) {
    Todos.todos().subscribe(res=>this.todos=res);
   }

  ngOnInit() {
  }

}
