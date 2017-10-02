import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Emp:Array<Employee>=[
    //new Employee(1,'ABC',15000),
    //new Employee(2,'XYZ',10000),
    //new Employee(3,'PQR',17000)
  ];
  addData(event:any)
  {
    this.Emp.push(event);
  }
}
