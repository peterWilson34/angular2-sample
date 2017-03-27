import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TodosService {
  constructor(private http: Http) {}
   todos(){
     return this.http.get('http://test.w34.co/todos/').map(res=>res.json());
   }
}
