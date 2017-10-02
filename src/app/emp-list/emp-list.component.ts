import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
    selector:'app-emp-list',
    templateUrl:'../emp-list/emp-list.component.html',
    styleUrls:['../emp-list/emp-list.component.css']

})
export class EmpListComponent
{
   editeEmp=new Employee();
   updateBtnClicked:boolean=false;
   //get employee list from parent component to display 
   @Input("getEmp") Emp;
   //send employee object to parent for deletion
   @Output() deletEmp = new EventEmitter();
  
  deleteEmp(employee:Employee){
    this.deletEmp.emit(employee);
  }
  editEmp(editEmp:Employee){
    this.updateBtnClicked=true;
    this.editeEmp=editEmp;
  }

}