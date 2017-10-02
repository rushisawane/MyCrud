import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
    selector:'app-emp-list',
    templateUrl:'../emp-list/emp-list.component.html',
    styleUrls:['../emp-list/emp-list.component.css']

})
export class EmpListComponent
{
   //get employee list from parent component to display
   @Input("getEmp") Emp;
   //send employee object to parent for deletion
   @Output() deletEmp = new EventEmitter();
  
  deleteEmp(employee:Employee){
    this.deletEmp.emit(employee);
  }

}